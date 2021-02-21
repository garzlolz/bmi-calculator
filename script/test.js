var snedData = document.querySelector('#sendbtn');
var list  = document.querySelector('.list');
var data = JSON.parse(localStorage.getItem('List')) || [];
updataed(data);

function addList(){
    var height = document.querySelector('.height').value;
    var weight = document.querySelector('.weight').value;
    var bmi = weight/((height/100)*(height/100));
 
    var str = ''
    if(bmi>40){
        str = '非常嚴重肥胖'
        console.log(str);
    }
    else if(bmi>35){
        str = '嚴重肥胖';
        console.log(str);
    }
    else if(bmi>30){  
        str = '中等肥胖';
        console.log(str);
    }
    else if(bmi>25){     
        str = '體重過重';
        console.log(str);
    }
    else if(bmi>18.5){  
        str = '體重正常';
        console.log(str);
    }
    else if(bmi>16){   
        str = '體重過輕';
        console.log(str);
    }
    else if(bmi>0){
        str = '嚴重體重不足';
        console.log(str);
    };
    var record = {
        condiction:str,
        kg:height,
        meter:weight,
        weight:bmi.toFixed(2),
    }
    data.push(record);
    localStorage.setItem('List',JSON.stringify(data));
    updataed(data);
}

function updataed(items){
    var str =  '';
    var len  = items.length;
    for(var i=0;i<len;i++){
        str = '';
        var len = items.length;
        for (var i = 0; len > i; i++) {
          str += '<div class="listdata"><a href="#" data-index=' + i + ' />刪除</a> <span> 狀態 : <h1>' + items[i].condiction + '</h1> BMI :'+items[i].weight+' 體重 : '+items[i].kg+'kg 身高 : '+items[i].meter+'cm</span></div>';
        }
        list.innerHTML = str;
    }
}

function kill(e){
    e.preventDefault();
    if(e.target.nodeName !== 'A'){return};
    var index = e.target.dataset.index;
    data.splice(index,1);
    localStorage.setItem('listData',JSON.stringify(data));
    updataed(data);
}

list.addEventListener('click',kill,false)
snedData.addEventListener('click',addList,false);