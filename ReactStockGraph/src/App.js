//used recharts for graph
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import React, { useState, useEffect, useCallback } from "react";
//used date-fns for date manipulation
import { subWeeks, subMonths, parseISO, subDays } from "date-fns";
import Modal from "./Modal";
//used axios for fetching and requesting data
import axios from "axios";

//initial data array
const data = [];
//dates and values pushed as an initial data array
for (let num = 30; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().slice(0, 10),
    value: 1 + Math.random(),
  });
}

export default function App() {
  //particular states for input,dates,formdata,timerange and filteration
  const [input, setInput] = useState(false);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    date: "",
    value: "",
  });
  const [selectedTimeRange, setSelectedTimeRange] = useState("1D");
  const [filteredData, setFilteredData] = useState(data);

  const filterChartData = useCallback(
    //callback function for timerange selection
    (timeRange) => {
      let startDate;

      switch (timeRange) {
        case "1M":
          startDate = subMonths(new Date(), 1);
          break;
        case "1D":
          startDate = subDays(new Date(), 1);
          break;
        case "1W":
          startDate = subWeeks(new Date(), 1);
          break;
        default:
          startDate = subDays(new Date(), 1);
      }

      const filtered = data.filter((item) => parseISO(item.date) >= startDate);
      return filtered;
    },
    [data]
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.date && formData.value) {
      const newInput = {
        date: formData.date,
        value: formData.value,
      };
      //POST requesst is done
      axios
        .post(
          "https://reactcharts-default-rtdb.firebaseio.com/input.json",
          newInput
        )
        .then((response) => {
          axios
            .get("https://reactcharts-default-rtdb.firebaseio.com/input.json")
            .then((response) => {
              const fetchedData = response.data;
              if (fetchedData) {
                const dataArray = Object.keys(fetchedData).map((key) => ({
                  ...fetchedData[key],
                  id: key,
                }));

                setData(dataArray);
                setFormData({ date: "", value: "" });
              }
            })
            .catch((error) => {
              console.error("Error fetching updated data:", error);
            });
        })
        .catch((error) => {
          console.error("Error adding data:", error);
        });
    }
  };
  //function to close the popup
  const inputhandler = () => {
    setInput(!input);
  };
  //GET request is done
  useEffect(() => {
    axios
      .get("https://reactcharts-default-rtdb.firebaseio.com/input.json")
      .then((response) => {
        const fetchedData = response.data;
        if (fetchedData) {
          const dataArray = Object.keys(fetchedData).map((key) => ({
            ...fetchedData[key],
            id: key,
          }));
          setData(dataArray);
          setFilteredData(filterChartData(selectedTimeRange));
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedTimeRange, filterChartData]); //dependency array consist of timerrange andd filterchartdata

  return (
    <div>
      <h1 className="heading">MyCommodityPriceChart</h1>
      <button onClick={inputhandler} className="addinputbtn">
        Add Input
      </button>
      {/* form application popup */}
      {input && (
        <Modal onClose={inputhandler}>
          <form onSubmit={handleSubmit} className="myinput">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="value">Value:</label>
            <input
              type="number"
              id="value"
              name="value"
              value={formData.value}
              onChange={handleInputChange}
              required
            />

            <button type="submit" className="modalbtn">
              Add Data
            </button>
          </form>
        </Modal>
      )}
      {/* filter dropdown option */}
      <select
        value={selectedTimeRange}
        onChange={(e) => setSelectedTimeRange(e.target.value)}
      >
        <option value="1M">Last 1 Month</option>
        <option value="1D">Last 24 Hours</option>
        <option value="1W">Last 7 Days</option>
      </select>
      {/* PRICE graph/chart starts here   */}
      <ResponsiveContainer height={400} class="responsivecontainer">
        <AreaChart data={filteredData}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />

          <XAxis dataKey="date" axisLine={false} tickLine={false} />

          <YAxis
            datakey="value"
            axisLine={false}
            tickLine={false}
            tickCount={8}
            tickFormatter={(number) => `$${number.toFixed(2)}`}
          />

          <Tooltip opacity={0.5} />

          <CartesianGrid opacity={0.1} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
