let currentTab="all";
const tabActive =["bg-navy","border-navy","text-white"];
const tabInactive =["bg-transparent","text-slate-700","border-slate-200","text-black"];

const allContainer=document.getElementById("all-container");
const interviewContainer=document.getElementById("interview-container");
const rejectContainer=document.getElementById("reject-container");

console.log(allContainer,interviewContainer,rejectContainer);

function switchTab(Tab) {
    console.log(Tab);
    const tabs=["all","interview","rejected"];

    for(const t of tabs){
        const tabName= document.getElementById("tab-"+t); 
        if(t===Tab){
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }
        else{
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }
    }
    const pages=[allContainer,interviewContainer,rejectContainer];
    for(const section of pages){
        section.classList.add("hidden");
    }

    if(Tab==="all"){
        allContainer.classList.remove("hidden");
        
    }
    else if(Tab==="interview"){
       
        interviewContainer.classList.remove("hidden");
        
    }
    if(Tab==="rejected"){
        rejectContainer.classList.remove("hidden");
    }

}
switchTab(currentTab);
   