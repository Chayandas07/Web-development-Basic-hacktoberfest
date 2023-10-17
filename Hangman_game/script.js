window.onload = function() {
    c = document.getElementById("ca");
    ctx = c.getContext("2d");
    c.width = window.innerWidth;
    c.height = window.innerHeight*0.6;
    w = c.width;
    h = c.height;
    
    color = "rgba(150,150,255,1)";
    document.body.style.background = color;
    
    start();
}

function start() {
    word = words[Math.floor(2001*Math.random())];
    wordCopy = word;
    
    hash = createHash(word);
    hp = document.getElementById("hash")
    hp.innerHTML = hash;
    
    counter = 0;
    
    done = false;
    c.width = c.width;
    
    enable();
}

function createHash(word) {
    hash = ""
    for(i=0;i<word.length;i++) {
        hash += "_ ";
    }
    return hash;
}

function disable(key) {
    button = document.getElementById(key);
    button.disabled = true;
    button.style.color = "black";
    if(!check(key)) {
        button.style.background = "rgba(255,0,0,1)";
        draw(counter);
        counter += 1;
    }
    else {
        button.style.background = "rgba(0,255,0,1)";
        done = true;
        for(i=0;i<word.length;i++) {
            if(wordCopy[i] != "~") {
                done = false;
            }
        }
    }
    if(done) {
        setTimeout(()=>{end("won");start()}, 1000)
    }
}

function check(key) {
    correct = false;
    while(wordCopy.indexOf(key) != -1) {
        index = wordCopy.indexOf(key)
        
        a  = wordCopy.substr(0,index) + "~";
        a += wordCopy.substr(index+1);
        wordCopy = a;
        
        b  = hash.substr(0,index*2) + key;
        b += hash.substr(index*2+1);
        hash = b
        
        hp.innerHTML = hash;
        correct = true;
    }
    return correct;
}

function enable() {
    abc = ['a','b','c','d','e','f','g','h','i',
           'j','k','l','m','n','o','p','q','r',
           's','t','u','v','w','x','y','z'];

    for(i=0;i<26;i++) {
        button = document.getElementById(abc[i]);
        button.disabled = false;
        button.style.background = "lightgrey";
    }
}

function end(state) {
    div = document.createElement("div");
    div.style.position = "absolute";
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.left = "0";
    div.style.top = "0";
    document.body.appendChild(div);
    
    par = document.createElement("center");
    par.innerHTML = "<b><p>You lost!<br>The word was:<br>"+
                     word+"</b></p>"
    par.style.marginTop = "0px";
    par.style.position = "absolute";
    par.style.left = String(w/4)+"px";
    par.style.top = String(h/2.8)+"px";
    div.appendChild(par);
    
    if(state == "lost") {
        div.style.background = "rgba(255,0,0,.75)";
        document.body.style.background = "red";
    }
    else if(state == "won") {
        par.innerHTML = "<b><p>You won!</b></p>";
        div.style.background = "rgba(0,255,0,.75)";
        par.style.left = String(w/2.8)+"px";
        par.style.top = String(h/2.2)+"px";
        document.body.style.background = "green";
    }
    setTimeout(function() {
        document.body.removeChild(div);
        color = "rgba(150,150,255,1)";
        document.body.style.background = color;
        counter = 0;
    },2500);
}


function draw(counter) {
    switch(counter) {
        case 0:
            ctx.fillRect(w/10,h-h/15,w-w/5,h/50);
            break;
        case 1:
            ctx.fillRect(w/6,h/15,w/30,h-h/8.8);
            break;
        case 2:
            ctx.lineWidth = 8;
            ctx.beginPath();
            ctx.moveTo(w/5.5,3*h/4);
            ctx.lineTo(w/3,h-h/18);
            ctx.stroke();
            break;
        case 3:
            ctx.fillRect(w/6,h/15,w/2,h/60);
            break;
        case 4:
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(w/5.5,h/4);
            ctx.lineTo(w/3,h/13);
            ctx.stroke();
            break;
        case 5:
            ctx.fillRect(w/2-w/150,h/15,w/75,h/8);
            break;
        case 6:
            ctx.beginPath();
            ctx.arc(w/2,h/4,h/20,0,2*Math.PI);
            ctx.stroke();
            break;
        case 7:
            ctx.fillRect(w/2-w/100,h/3.4,w/50,h/5);
            break;
        case 8:
            ctx.lineWidth = 4.5;
            ctx.beginPath();
            ctx.moveTo(w/2,h/3.2);
            ctx.lineTo(w/2.6,h/2.5);
            ctx.stroke();
            break;
        case 9:
            ctx.lineWidth = 4.5;
            ctx.beginPath();
            ctx.moveTo(w/2,h/3.2);
            ctx.lineTo(w-w/2.5,h/2.3);
            ctx.stroke();
            break;
        case 10:
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(w/2,h/2.1);
            ctx.lineTo(w/2.6,h/1.6);
            ctx.stroke();
            break;
        case 11:
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(w/2,h/2.1);
            ctx.lineTo(w-w/2.5,h/1.5);
            ctx.stroke();
            
            end("lost");
            start();
            break;
    }
}



// 2000 random generated words [Python]

words = ['keywords','rhythms','meets',
'programmer','elapses','fumes',
'skirts','pictures','inventory',
'workbook','trainer','grasp',
'pipes','count','sponges',
'null','exhausts','ejection',
'implement','headset','hour',
'bottom','crank','splint',
'whirls','shows','perforators',
'exhibit','burn','exchanges',
'cavities','amperages','wagon',
'enclosure','rains','gloves',
'inventories','outing','cuffs',
'truck','buds','letterhead',
'approval','driver','conducts',
'nickel','arms','brightness',
'shirts','creeks','millions',
'seam','acceptors','periods',
'discounts','drawers','nest',
'harm','stability','shipments',
'map','multiplications','tunnels',
'screens','prison','witness',
'public','finishes','reams',
'mistrial','combatants','conflict',
'document','chimneys','talks',
'parts','hood','destroyer',
'layers','tub','supervision',
'asterisk','bin','headers',
'assignment','subsystems','wholesale',
'deputies','alternatives','squadrons',
'telephones','corks','grass',
'overvoltages','frequency','gases',
'decisions','reader','repairs',
'keels','taper','crawl',
'tank','entrances','slice',
'decorations','water','permit',
'tools','camp','polish',
'influences','tide','incomes',
'dips','tables','badge',
'vice','usage','rim',
'twist','gasoline','inspection',
'ore','fetches','shaft',
'voids','mats','selections',
'attorney','parts','plexiglass',
'rescuer','hilltop','landings',
'stalls','balloons','cure',
'reliability','advancement','moistures',
'hospital','holddowns','kinds',
'selections','envelopes','beams',
'conjunction','inductance','symptom',
'actions','detachments','interviews',
'test','ray','lining',
'faces','memorandums','season',
'gardens','churns','blot',
'cramp','retrieval','shortages',
'outing','servo','here',
'arms','feeder','auto',
'freedom','pressure','manner',
'subsystems','bolts','permit',
'launches','platter','needles',
'carriers','subdivisions','reading',
'preparation','training','crewmember',
'attackers','strand','selection',
'part','locker','selection',
'science','winds','pump',
'recoveries','release','manner',
'donor','societies','instrumentation',
'cabs','sign','dozens',
'misalinements','completions','magneto',
'values','sneeze','pulls',
'examples','trailer','alerts',
'steamer','images','events',
'semiconductor','method','icing',
'freight','pushups','summary',
'classrooms','rest','wings',
'overlays','rules','cotton',
'howl','tar','originators',
'sponges','stretchers','evaluation',
'calories','tension','winches',
'heels','prism','elections',
'preparation','seesaw','position',
'assault','lime','searchlights',
'deal','operands','glass',
'ceremonies','countries','guards',
'spindle','hole','vessel',
'yolk','court','registers',
'rower','width','joints',
'smash','cavities','volt',
'fall','craft','waves',
'uncertainty','system','sinks',
'removal','stem','advancements',
'set','exhaust','milestone',
'pegs','gasolines','zone',
'bolt','isolation','reproduction',
'kilometer','steeple','interchange',
'steeple','echoes','bases',
'member','accrual','countries',
'hut','crosses','switches',
'folds','groan','conjunction',
'airspeed','wiggles','weave',
'apportionment','voltage','docks',
'deflectors','bigamies','tacks',
'preferences','rotor','humor',
'stoppers','plugs','stage',
'rug','interruptions','leaders',
'pictures','grove','wires',
'policy','model','investigations',
'thimbles','machine','pines',
'architecture','polishes','mornings',
'meter','alternatives','wear',
'oaks','suggestions','lints',
'uniform','diameter','fuels',
'weeds','gulf','barrier',
'rainbows','glove','honors',
'halves','acronym','wrists',
'pressures','sword','pleads',
'vessels','bail','complement',
'stick','towns','guns',
'amusements','sixes','puddle',
'endeavors','totals','sight',
'stocking','units','stators',
'launchers','belt','activities',
'workloads','blanket','truth',
'hotel','heads','article',
'marks','whisper','presences',
'capacitances','legends','plate',
'verse','government','belief',
'entrance','participations','whistles',
'tape','glass','trials',
'dependence','algebra','receptacle',
'spots','skins','countries',
'bites','holds','addresses',
'ceremony','honor','experience',
'governors','altitude','appeal',
'ramp','division','lee',
'change','animal','tablespoons',
'gravity','facilitation','copies',
'component','service','stone',
'veterans','operation','seawater',
'confession','category','forehead',
'gleam','games','aggravations',
'drainage','freedom','buildings',
'knots','beds','insignia',
'transmitter','factor','purchaser',
'transportation','zips','swing',
'fare','intents','finish',
'buy','serial','employees',
'misalignments','admiralties','jurisdiction',
'buzzers','coin','pipe',
'talkers','walks','learning',
'mill','yarns','ventilators',
'pointer','june','mondays',
'folder','effects','drunk',
'schoolhouses','use','lightning',
'diagram','pump','wool',
'digits','bells','travels',
'parachutes','doses','boards',
'deaths','subroutines','oak',
'shortage','accessory','arrangement',
'memories','curvatures','ceiling',
'battle','waters','passages',
'items','composites','umbrellas',
'meeting','odor','grease',
'similarity','butters','coder',
'chock','requirements','bowl',
'variety','restaurant','jackets',
'babies','harnesses','heat',
'equipment','rotors','worry',
'arrangements','states','curtain',
'deletion','diseases','bilge',
'webs','nouns','launch',
'sneeze','string','longitudes',
'sled','boats','solder',
'solders','hospitals','saturdays',
'officials','telecommunication','unions',
'releases','uniform','permit',
'blur','salts','thumbs',
'kinds','knots','rib',
'pit','subtask','retrieval',
'oranges','journals','ores',
'divider','parks','environments',
'plastics','gum','curl',
'shares','buzzes','mask',
'toe','glue','apportionment',
'creeks','trips','abbreviation',
'petroleum','stationery','fridays',
'bowl','humidity','screwdrivers',
'gleams','rest','implement',
'reenlistments','output','rod',
'environments','fight','tastes',
'originals','crops','clamps',
'boxcars','header','laws',
'revolutions','reinforcement','handlers',
'pans','training','ramp',
'mouths','leg','folders',
'streak','entrapments','rumbles',
'cards','subprograms','hatch',
'board','distortion','delimiters',
'barriers','civilians','magazine',
'milliliters','substitutes','navigation',
'bill','envelope','thumbs',
'preservation','swallow','manufacturer',
'cautions','quotas','additions',
'blots','howl','butts',
'designation','work','limit',
'marches','crowds','residents',
'drums','linens','gardens',
'exhibits','haul','centimeter',
'miss','sparks','specialty',
'materials','baud','disgust',
'panels','porters','skies',
'crack','troop','radian',
'stages','carriage','orange',
'accomplishments','grinders','durability',
'son','centimeters','charts',
'meridian','withdrawal','contempt',
'distributors','response','servants',
'battle','stitch','nature',
'shotline','research','decoders',
'admission','eye','lesson',
'wash','coughs','much',
'armory','diary','democracy',
'miles','target','lines',
'tops','speech','skirts',
'modes','mattresses','grooves',
'silk','currents','drainer',
'supply','entrapments','bite',
'originators','concurrence','core',
'hoists','slings','presences',
'wraps','rubbish','seaman',
'boresights','prefix','takeoffs',
'plug','distortion','shed',
'threaders','honk','supply',
'oscillators','assault','bit',
'camp','camp','sailor',
'lake','duplicates','rushes',
'cores','drills','tars',
'alignment','assignment','traces',
'leap','grains','grips',
'compromises','diameters','workbooks',
'bread','alkalinity','affair',
'match','concentration','brake',
'reels','acre','fractions',
'intake','strings','couples',
'margins','nickel','interface',
'steams','store','commitments',
'arms','basins','mistake',
'beans','homes','installation',
'cots','missile','sediments',
'tactics','environments','tone',
'exercises','site','increase',
'semicolon','hazard','highway',
'dew','discontinuations','saturdays',
'throttles','canvases','flaps',
'compass','annexs','letter',
'jaw','reluctance','precaution',
'containers','farads','conspiracy',
'cabinets','tube','forearms',
'paygrades','averages','spills',
'escapes','signals','sport',
'fruits','twos','fuses',
'arrivals','honks','functions',
'straighteners','aims','gallows',
'glides','crack','exhibits',
'oscillator','wins','waterlines',
'arcs','deputy','umbrellas',
'fashions','issue','strobe',
'flower','punch','outfit',
'provisions','mask','buzzer',
'rust','stems','membrane',
'capacity','bats','insanity',
'ages','separations','copies',
'collar','cure','arrest',
'consequence','cottons','feelings',
'throttles','forests','reserves',
'bodies','times','railways',
'speaker','correspondence','hardship',
'damping','conjecture','washers',
'departures','flower','clumps',
'coordinations','warranties','majorities',
'civilian','soldiers','tachometers',
'interruption','basin','alibis',
'paragraph','liters','roof',
'leaders','lesson','hatches',
'desires','decisions','rivers',
'valley','fold','smash',
'builder','drivers','hammer',
'violet','repairs','tubes',
'diaphragm','wayside','orifices',
'message','towns','make',
'triggers','lock','meal',
'waves','ammunition','punishments',
'hammer','composites','reviews',
'ground','stator','cliff',
'necks','bang','liberty',
'sprayer','formation','behaviors',
'radios','directives','hisses',
'event','researchers','summers',
'echoes','pushups','concurrence',
'organization','precaution','guest',
'hunts','apostrophes','surprise',
'barrel','overload','cheats',
'cheats','periods','stress',
'bearing','mitts','spindle',
'documentations','installations','step',
'lakes','cloth','dissemination',
'slaps','key','ton',
'skew','horizons','dials',
'recognition','liquors','neck',
'housefalls','diesel','acres',
'sediment','ticket','appearances',
'hunt','sidewalks','salutes',
'aptitudes','dents','cupfuls',
'release','excuses','laps',
'compressors','motel','magnetos',
'much','scopes','asterisk',
'tray','science','bond',
'itineraries','skirt','subject',
'mitten','morning','exchanger',
'instance','beacons','stem',
'erasers','escorts','outfits',
'waterlines','introductions','june',
'swim','fifths','dab',
'fireplugs','participation','wing',
'privilege','recruits','questions',
'barrel','variations','basket',
'countries','bars','mailbox',
'sail','valves','nurses',
'alarm','smell','ray',
'eddies','thin','seed',
'blows','duration','shadows',
'steamer','fifties','color',
'apportionment','mill','calories',
'helmsman','discounts','poles',
'blindfolds','consequence','minority',
'threads','answer','wholesale',
'factory','ornament','polisher',
'tables','rescuer','hitches',
'humor','apparatuses','spots',
'shortages','policy','walks',
'jail','stretcher','reams',
'signal','bone','dams',
'kettles','bundle','lick',
'comment','adjective','list',
'launcher','sill','attribute',
'sharpeners','thermocouple','televisions',
'inspections','suppressions','keyword',
'accord','tops','chits',
'webs','locomotive','bend',
'accord','boresight','twists',
'strut','routines','frigates',
'heaps','sport','commendation',
'refund','photos','teaching',
'shoe','facilitation','slope',
'plate','passbooks','requirements',
'property','tag','plate',
'deed','networks','calculations',
'plow','spears','objectives',
'hoofs','identification','propulsion',
'concern','logistics','appellate',
'jumper','burn','scenes',
'cash','promotion','guide',
'categories','hilltop','site',
'troubleshooter','cap','update',
'directions','depletions','washers',
'buoy','freshwater','symptoms',
'doorknob','reasons','airplane',
'buoy','chapters','noises',
'jigs','visits','threader',
'distortion','outlines','credibility',
'tax','breakdowns','pick',
'combat','ores','rugs',
'transmitter','vessels','captures',
'image','thimbles','holddowns',
'hashmark','batteries','interference',
'rule','echelons','interruptions',
'applications','requisitions','fifteen',
'cheats','shotlines','stators',
'thermocouples','parallels','vice',
'adhesive','shafts','drydocks',
'anticipation','bilge','endeavors',
'rides','post','calories',
'cheese','stores','curl',
'observations','oak','edge',
'sling','principles','submarines',
'world','eases','fist',
'handlers','backup','evaluations',
'vessels','firings','substitutes',
'cleat','page','throttles',
'recommendations','updates','choices',
'talks','deposit','consequence',
'splicer','complexes','message',
'ceremonies','trade','clouds',
'square','towers','partner',
'classifications','absence','winch',
'knocks','rank','pits',
'hoop','menus','boots',
'medal','position','advantage',
'discount','qualifier','beliefs',
'hits','lantern','dittos',
'master','courses','repair',
'averages','moistures','prisoners',
'tourniquets','wastes','baths',
'loaf','wonders','punishment',
'waters','rim','funds',
'manager','investigation','tails',
'semaphore','sponsor','wastes',
'glues','steeple','gallows',
'stools','itinerary','sacks',
'sword','custodian','minimum',
'minds','lift','pot',
'collars','capstans','oaks',
'types','licenses','charge',
'thyristors','overtime','tools',
'february','petition','routine',
'shame','bench','highways',
'reenlistment','swing','implementations',
'cave','course','spaces',
'revision','nozzle','abuses',
'wools','captures','requests',
'marks','coats','assistance',
'sack','sir','gas',
'destroyer','prisms','cheeks',
'homes','spoke','combat',
'hums','brush','instructions',
'semaphores','impedance','knives',
'kettles','sounds','watch',
'generations','nets','waxes',
'courses','lifts','firmware',
'forecasts','operation','volts',
'lifeboats','awards','lenders',
'distresses','inquiries','religions',
'scales','troops','cape',
'centers','voltage','cot',
'resolution','tourniquet','cramps',
'here','crimes','limitation',
'programmer','perforations','calibers',
'integrity','parallels','preference',
'seaman','application','sill',
'compass','limbs','trusts',
'tent','flood','defects',
'supermarket','much','neglect',
'messages','reactance','ovens',
'relays','streak','fiction',
'freshwater','fracture','custody',
'diamonds','effectiveness','factors',
'regions','tons','pressure',
'lapse','apprehensions','stretcher',
'lead','socks','detonation',
'male','businesses','insurance',
'path','stoppered','hammer',
'mother','girl','taper',
'corner','zip','swing',
'thought','kiloliter','reserves',
'race','swaps','howls',
'chattels','adaption','situation',
'format','cushion','kiloliter',
'photos','disks','reservoirs',
'modification','addition','pear',
'retrieval','vouchers','eighties',
'appearance','assemblies','blowers',
'telecommunications','reaches','triangles',
'classes','flower','lifeboats',
'panels','versions','specifications',
'hinges','supplies','apostrophes',
'originals','rollers','buys',
'complexes','rigs','computation',
'insanity','squadron','administrator',
'bodies','cone','solution',
'shovel','bath','class',
'lees','sonars','correlation',
'pen','pan','strut',
'status','detachment','deposition',
'car','scratchpad','fathom',
'forests','baby','check',
'densities','beans','notation',
'saddle','bunch','data',
'thunder','dictionary','brightness',
'superintendent','ores','blocks',
'wagon','tear','paper',
'firearms','steps','integrity',
'galleys','dynamics','pyramids',
'helicopter','circumstances','convenience',
'sill','release','coordinate',
'fabrications','smile','electricity',
'core','ways','blurs',
'comparisons','tries','explosives',
'skirts','rims','chases',
'stripe','profession','hiss',
'credibility','pots','standard',
'summary','worksheets','syntax',
'toss','inventions','designator',
'category','hydrometer','coders',
'zone','hour','outfits',
'petitions','race','automobile',
'stones','defections','stick',
'periods','lender','ditches',
'jelly','stack','nonavailabilities',
'subordinate','loads','vices',
'cartridge','positions','output',
'reel','lens','troubleshooters',
'vicinities','masters','channels',
'cents','mop','accomplishment',
'warranty','worm','chits',
'crafts','uniforms','pit',
'flares','bonds','thirds',
'alarm','mornings','adaptions',
'guidelines','welders','mailboxes',
'chit','executions','mat',
'adherence','plants','interaction',
'photographs','crops','washer',
'abuser','manners','deployment',
'lump','trap','replenishment',
'continuity','increments','procedure',
'educator','diodes','breast',
'captains','adjustments','breeze',
'circuitry','races','blink',
'prompts','pushup','rock',
'carpet','subjects','trusts',
'probability','catalogs','coordinate',
'stations','south','updates',
'receptacles','meetings','apple',
'runoffs','chattel','impact',
'fur','hardships','deaths',
'vectors','malfunction','overalls',
'checkout','fake','records',
'tables','cams','electrode',
'stars','amusements','frequency',
'transport','hands','flashlight',
'rams','coil','january',
'west','bytes','trays',
'threats','returns','back',
'conversion','wheels','velocities',
'product','transport','drydocks',
'adjustment','highline','caps',
'talk','region','classifications',
'chairpersons','alternates','tomorrow',
'sediments','journal','acquittals',
'outlets','couples','dress',
'recipient','dollars','disadvantages',
'combs','hoists','december',
'bodies','ball','azimuth',
'approach','exhausts','topping',
'subtotals','humps','opinions',
'assignments','athwartship','camps',
'competitions','individuals','armors',
'gardens','complexes','wagons',
'half','keys','observers',
'plant','sirs','parties',
'balls','crust','moments',
'visibilities','range','fetch',
'muscle','barometer','jaw',
'enclosure','sports','powders',
'twins','clubs','mineral',
'subprogram','propellers','annex',
'rumbles','profession','democracies',
'tastes','neck','oscillations',
'skew','terminology','quotas',
'pistols','teller','navigation',
'inventory','admission','wind',
'judges','eights','value',
'muscles','designations','radiator',
'allegation','sum','beings',
'thunder','lining','destination',
'contamination','winch','licenses',
'tilling','acceptors','potatos',
'suns','sets','capstans',
'protests','arcs','requisition',
'manuals','objectives','diameters',
'grove','sod','hubs',
'summer','catalogs','crowns',
'stories','rifles','tails',
'technique','battle','rings',
'diver','contempt','classrooms',
'sailors','airspeeds','odds',
'hashmark','adviser','grasses',
'society','burns','civilians',
'harpoon','rags','insurance',
'harmony','fives','passengers',
'volt','tags','humor',
'equation','glazes','wafer',
'trucks','mark','reinforcements',
'knobs','chin','chases',
'deposit','alley','pupils',
'noises','ignitions','cots',
'character','trains','pay',
'streets','arrays','ingredients',
'fridays','amplifiers','galleys',
'grove','suppressions','forts',
'frigates','monitors','weddings',
'bowl','mist','straw',
'crafts','plays','concentration',
'spade','twist','principal',
'lake','retractor','prisoners',
'concern','tactics','sizing',
'superstructures','scissors','dockings',
'macro','anchor','wools',
'butter','spike','college',
'panels','acquisition','weed',
'measure','group','driller',
'multiplex','eligibility','collar',
'neutron','hilltops','radian',
'governors','bottles','beat',
'carriage','receptacle','casualty',
'forearms','lining','peak',
'capabilities','losses','civilian',
'corks','sneezes','journal',
'odors','paint','elapse',
'bushes','partitions','longitudes',
'cardboard','symptom','print',
'teachings','giant','leadership',
'honk','hashmark','slash',
'citizen','oxide','ages',
'adverb','fist','preserver',
'fighter','story','presents',
'babies','sentry','locomotive',
'stake','deck','greases',
'phases','mother','rubber',
'wing','lint','preserver',
'topping','hill','procurements',
'north','submarine','apples',
'infections','embosses','sales',
'barriers','stem','shores',
'fountain','limp','counsel',
'staples','check','splitters',
'rejection','drop','outlet',
'entrapment','cruisers','assignments',
'firmware','impulses','patterns',
'squares','touches','conflict',
'advance','reduction','decisions',
'colon','tastes','jump',
'fastener','kiss','compressions',
'goggles','consoles','gunfire',
'departures','soups','paragraph',
'cheat','daughters','hardcopy',
'volt','kills','sexes',
'distance','flanges','average',
'page','rower','qualification',
'rolls','odor','conn',
'flare','drums','aluminums',
'lift','valve','grades',
'fiction','accommodation','weddings',
'measurement','absence','shipping',
'televisions','bypass','managers',
'reel','total','rides',
'print','terrains','round',
'overtime','sort','arc',
'locomotive','confession','spacer',
'volumes','steam','chocks',
'transport','elections','turbulence',
'rifles','oaks','calibration',
'charge','photograph','idea',
'oxygen','approaches','beans',
'strengths','battle','measure',
'eraser','paws','picks',
'elimination','industry','crystal',
'elapse','stop','manufacturer',
'abuses','bulkheads','downgrades',
'interior','quartermasters','adherence',
'dears','coughs','doubt',
'shovels','fridays','forms',
'directions','bumps','airfield',
'spare','dealers','bulbs',
'spans','cart','button',
'twist','pushes','claw',
'communications','submarine','notices',
'stability','springs','typewriters',
'prisms','administrator'];