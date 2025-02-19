    let height = document.getElementById('height');
    let weight = document.getElementById('weight');
    let result = document.getElementById('result');
    let resultBtn = document.getElementById("resultBtn");
    let titleWeight = document.getElementById('titleWeight');
    let resultList = document.getElementById('resultList');
    let bmi =0;
    let time =new Date();
    let clearBtn = document.getElementById('clearBtn');
    

    let bmiColor = [
        {BMI:"過輕",
        bgColor:"bg-[#31BAF9]",
        textColor:"text-[#31BAF9]",
        borserColor:"border-[#31BAF9]"
    },{
        BMI:"理想",
        bgColor:"bg-[#86D73F]",
        textColor:"text-[#86D73F]",
        borserColor:"border-[#86D73F]"
    },
    {
        BMI:"過重",
        bgColor:"bg-[#FF982D]",
        textColor:"text-[#FF982D]",
        borserColor:"border-[#FF982D]"
    },
    {
        BMI:"輕度肥胖",
        bgColor:"bg-[#FF6C03]",
        textColor:"text-[#FF6C03]",
        borserColor:"border-[#FF6C03]"
    },
    {
        BMI:"中度肥胖",
        bgColor:"bg-[#FF6C03]",
        textColor:"text-[#FF6C03]",
        borserColor:"border-[#FF6C03]"
    },
    {
        BMI:"重度肥胖",
        bgColor:"bg-[#FF1200]",
        textColor:"text-[#FF1200]",
        borserColor:"border-[#FF1200]"
}];

    //計算BMI變更圖示
    resultBtn.addEventListener('click',function(e){
        bmiCount();
        if(height.value=='' || weight.value=='' ){return alert('請輸入身高體重')}
        
        if(bmi<19){
            resultBtn.classList.toggle('hidden')
            resultList.innerHTML ='<div class="flex flex-row items-center  relative"id="titleWeight"> <div class="w-[120px] h-[120px] rounded-full border-[6px] '+ bmiColor[0].borserColor +' text-center items-center relative"><div class="text-[32px] '+ bmiColor[0].textColor +' absolute left-[13px] top-[30px]"id="titleBmi"> </div><div class="'+ bmiColor[0].textColor +' text-[14px] absolute left-[40px] bottom-[20px]">BMI</div><button type="button" class="w-[30px] h-[30px] '+bmiColor[0].bgColor+' rounded-full border-[3px] border-neutral-700 absolute bottom-0 right-0 z-50 hover:-rotate-45" id="ResetBtn"><img src="./assets/icons_loop.png" alt="" class="pl-[5px] contrast-200 "/></button></div><div class="text-[32px] '+bmiColor[0].textColor+' absolute bottom-[-50px] right-[30px] sm:bottom-[30px] sm:right-[-80px] " id="bmiStr">'+bmiColor[0].BMI+'</div></div>';
            let titleBmi = document.getElementById('titleBmi');
            let ResetBtn = document.getElementById('ResetBtn');
            let bmiStr =document.getElementById('bmiStr');
            titleBmi.textContent = bmi;
            addData();
            ResetBtn.addEventListener('click',reset)
        }
        else if(bmi>=19 && bmi<24){
            resultBtn.classList.toggle('hidden')
            resultList.innerHTML ='<div class="flex flex-row items-center  relative"id="titleWeight"> <div class="w-[120px] h-[120px] rounded-full border-[6px] '+ bmiColor[1].borserColor +' text-center items-center relative"><div class="text-[32px] '+ bmiColor[1].textColor +' absolute left-[13px] top-[30px]"id="titleBmi"> </div><div class="'+ bmiColor[1].textColor +' text-[14px] absolute left-[40px] bottom-[20px]">BMI</div><button type="button" class="w-[30px] h-[30px] '+bmiColor[1].bgColor+' rounded-full border-[3px] border-neutral-700 absolute bottom-0 right-0 z-50 hover:-rotate-45" id="ResetBtn"><img src="./assets/icons_loop.png" alt="" class="pl-[5px] contrast-200 "/></button></div><div class="text-[32px] '+bmiColor[1].textColor+' absolute bottom-[-50px] right-[30px] sm:bottom-[30px] sm:right-[-80px]" id="bmiStr">'+bmiColor[1].BMI+'</div></div>';
            let titleBmi = document.getElementById('titleBmi');
            let ResetBtn = document.getElementById('ResetBtn');
            let bmiStr =document.getElementById('bmiStr');
            titleBmi.textContent = bmi;
            addData();
            ResetBtn.addEventListener('click',reset)
        }
        else if(bmi>=24 && bmi <27){
            resultBtn.classList.toggle('hidden')
            resultList.innerHTML ='<div class="flex flex-row items-center  relative"id="titleWeight"> <div class="w-[120px] h-[120px] rounded-full border-[6px] '+ bmiColor[2].borserColor +' text-center items-center relative"><div class="text-[32px] '+ bmiColor[2].textColor +' absolute left-[13px] top-[30px]"id="titleBmi"> </div><div class="'+ bmiColor[2].textColor +' text-[14px] absolute left-[40px] bottom-[20px]">BMI</div><button type="button" class="w-[30px] h-[30px] '+bmiColor[2].bgColor+' rounded-full border-[3px] border-neutral-700 absolute bottom-0 right-0 z-50 hover:-rotate-45" id="ResetBtn"><img src="./assets/icons_loop.png" alt="" class="pl-[5px] contrast-200 "/></button></div><div class="text-[32px] '+bmiColor[2].textColor+' absolute bottom-[-50px] right-[30px] sm:bottom-[30px] sm:right-[-80px]" id="bmiStr">'+bmiColor[2].BMI+'</div></div>';
            let titleBmi = document.getElementById('titleBmi');
            let ResetBtn = document.getElementById('ResetBtn');
            let bmiStr =document.getElementById('bmiStr');
            titleBmi.textContent = bmi;
            addData();
            ResetBtn.addEventListener('click',reset)
        }
        else if(bmi>=27 && bmi <30){
            resultBtn.classList.toggle('hidden')
            resultList.innerHTML ='<div class="flex flex-row items-center  relative"id="titleWeight"> <div class="w-[120px] h-[120px] rounded-full border-[6px] '+ bmiColor[3].borserColor +' text-center items-center relative"><div class="text-[32px] '+ bmiColor[3].textColor +' absolute left-[13px] top-[30px]"id="titleBmi"> </div><div class="'+ bmiColor[3].textColor +' text-[14px] absolute left-[40px] bottom-[20px]">BMI</div><button type="button" class="w-[30px] h-[30px] '+bmiColor[3].bgColor+' rounded-full border-[3px] border-neutral-700 absolute bottom-0 right-0 z-50 hover:-rotate-45" id="ResetBtn"><img src="./assets/icons_loop.png" alt="" class="pl-[5px] contrast-200 "/></button></div><div class="lg:text-[32px] text-[22px] '+bmiColor[3].textColor+' absolute bottom-[-50px] right-[15px]" id="bmiStr">'+bmiColor[3].BMI+'</div></div>';
            let titleBmi = document.getElementById('titleBmi');
            let ResetBtn = document.getElementById('ResetBtn');
            let bmiStr =document.getElementById('bmiStr');
            titleBmi.textContent = bmi;
            addData();
            ResetBtn.addEventListener('click',reset)
        }
        else if(bmi>=30 && bmi <35){
            resultBtn.classList.toggle('hidden')
            resultList.innerHTML ='<div class="flex flex-row items-center  relative"id="titleWeight"> <div class="w-[120px] h-[120px] rounded-full border-[6px] '+ bmiColor[4].borserColor +' text-center items-center relative"><div class="text-[32px] '+ bmiColor[4].textColor +' absolute left-[13px] top-[30px]"id="titleBmi"> </div><div class="'+ bmiColor[4].textColor +' text-[14px] absolute left-[40px] bottom-[20px]">BMI</div><button type="button" class="w-[30px] h-[30px] '+bmiColor[4].bgColor+' rounded-full border-[3px] border-neutral-700 absolute bottom-0 right-0 z-50 hover:-rotate-45" id="ResetBtn"><img src="./assets/icons_loop.png" alt="" class="pl-[5px] contrast-200 "/></button></div><div class="lg:text-[32px] text-[22px] '+bmiColor[4].textColor+' absolute bottom-[-50px] right-[15px]" id="bmiStr">'+bmiColor[4].BMI+'</div></div>';
            let titleBmi = document.getElementById('titleBmi');
            let ResetBtn = document.getElementById('ResetBtn');
            let bmiStr =document.getElementById('bmiStr');
            titleBmi.textContent = bmi;
            addData();
            ResetBtn.addEventListener('click',reset)
        }
        else{
            resultBtn.classList.toggle('hidden')
            resultList.innerHTML ='<div class="flex flex-row items-center  relative"id="titleWeight"> <div class="w-[120px] h-[120px] rounded-full border-[6px] '+ bmiColor[5].borserColor +' text-center items-center relative"><div class="text-[32px] '+ bmiColor[5].textColor +' absolute left-[13px] top-[30px]"id="titleBmi"> </div><div class="'+ bmiColor[5].textColor +' text-[14px] absolute left-[40px] bottom-[20px]">BMI</div><button type="button" class="w-[30px] h-[30px] '+bmiColor[5].bgColor+' rounded-full border-[3px] border-neutral-700 absolute bottom-0 right-0 z-50 hover:-rotate-45" id="ResetBtn"><img src="./assets/icons_loop.png" alt="" class="pl-[5px] contrast-200 "/></button></div><div class="lg:text-[32px] text-[22px] '+bmiColor[5].textColor+' absolute bottom-[-50px] right-[15px] " id="bmiStr">'+bmiColor[5].BMI+'</div></div>';
            let titleBmi = document.getElementById('titleBmi');
            let ResetBtn = document.getElementById('ResetBtn');
            let bmiStr =document.getElementById('bmiStr');
            titleBmi.textContent = bmi;
            addData();
            ResetBtn.addEventListener('click',reset);

        }
    });

    //BMI計算
    function bmiCount(){
        let heightVal = height.value;
        let weightVal = weight.value;
        bmi = ((weightVal*10000) / Math.pow(heightVal,2)).toFixed(2) ;
    };
    

    function reset(){
        resultList.innerHTML ='';
        resultBtn.classList.toggle('hidden');
    }

    
    
    
    


    
    let bmiList = document.getElementById('bmiList');
    let data = JSON.parse(localStorage.getItem('listData')) || [];
    updateMainList(data);


    //新增localstorage
    function addData(){
        let bmiColorLen = bmiColor.length;
        let bmiVal = '';
        let color ='';
        nowtime= time.toLocaleDateString();
        for (let i = 0; i< bmiColorLen; i++) {
          if(bmiColor[i].BMI == bmiStr.textContent){
            color = bmiColor[i].bgColor;
            bmitext = bmiColor[i].BMI;
          }
        }
        let todo ={
            listBgColor:color,
            listBMI:bmitext,
            listBmiVal:bmi,
            listweight:weight.value,
            listheight:height.value,
            listTime:nowtime
        };
        data.push(todo);
        updateMainList(data);
        localStorage.setItem('listData',JSON.stringify(data));
    }

    function updateMainList(items){
        let str ='';
        let itemsLen= items.length;
        for(let i=0; i<itemsLen; i++){
            str += '<div class="flex flex-row justify-between bg-white shadow w-full xl:w-1/2 xl:h-[50px] xl:mx-[25%] mb-5 relative"><div class=" '+items[i].listBgColor+' shadow-md"><span class="invisible">1</span></div><div class="py-3 sm:absolute sm:left-[40px]"><span class="text:-xs xl:text-[25px]">'+items[i].listBMI+'</span></div><div class="py-3 sm:p-3 xl:absolute xl:left-[150px] sm:ml-5"><span class="text-[12px]">BMI</span><span class="xl:text-[20px]">'+items[i].listBmiVal+'</span></div><div class="py-3 sm:p-3 sm:ml-5 xl:absolute xl:left-[300px]"><span class="text-[12px]">weight</span><span class="xl:text-[20px]">'+items[i].listweight+'</span><span class="xl:text-[20px]">kg</span></div><div class="py-3 sm:p-3 xl:absolute xl:left-[500px]"><span class="text-[12px]">height</span><span class="xl:text-[20px]">'+items[i].listheight+'</span><span class="xl:text-[20px]">cm</span></div><div class="py-3 sm:p-3 xl:absolute xl:left-[680px] xl:bottom-0"><span class="text-[12px]">'+items[i].listTime+'</span></div></div>'
        }
        bmiList.innerHTML = str;
    }

    clearBtn.addEventListener('click',function(){
        if(bmiList.innerHTML==''){return alert('沒有資料');}
        localStorage.removeItem('listData');
        data.splice(0,data.length);
        bmiList.innerHTML='';
    })