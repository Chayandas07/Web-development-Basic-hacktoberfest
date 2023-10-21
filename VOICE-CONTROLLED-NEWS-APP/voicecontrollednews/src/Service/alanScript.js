intent('$(item* (.*))', (p) => {
    if(p.item.value=='health' ||p.item.value=='Sports' ||p.item.value=='business' ||p.item.value=='General' ){
        p.play({ command:"VOICENEWS",data:p.item.value});
        p.play(`Fetching News on ${p.item.value} Category`);
        
    }
    else{
        p.play('Cannot get Data');
    }
});