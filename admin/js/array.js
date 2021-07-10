const dropDowns = {
    range_dropdowns: function(start, end, append, title){        
        let data = `<option value='0'>${title}</option>`;
        for( start; start<=end; start++ ){
            let appendText = append!="" ? ` ${append}` : "";
            data = data+`<option value='${start}${appendText}'>${start}${appendText}</option>`;
        }
        return data;
    },
    data_dropdowns: function(title, list){
        let data = `<option value='0'>${title}</option>`;
        for(let i=0; i<list.length;i++){
            data = data+`<option value='${list[i]}'>${list[i]}</option>`;
        }
        return data;
    },
    range_jump_dropdowns: function(start, end, append, jump, title){        
        let data = `<option value='0'>${title}</option>`;       
        for( start; start<=end; start++ ){
            let newNumber = start*jump;
            data = data+`<option value='${newNumber} ${append}'>${newNumber} ${append}</option>`;
        }
        return data;
    },
}