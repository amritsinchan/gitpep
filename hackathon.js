const puppy = require("puppeteer");

let browserPromise = puppy.launch({
    headless: false,
    defaultViewport: false,
    
    
});// browser open promise
const id = "bokip45040@bsmitao.com" ;
const pass = "tanyakaur";
let tab;

browserPromise.then(function(browser){
    let pagesPromise = browser.pages();
    return pagesPromise;
}).then(function(pages){
    tab = pages[0];
    let pageOpenPromise = tab.goto("https://todoist.com/users/showlogin");
    return pageOpenPromise;

 }).then(function(){
    let idPromise = tab.type("#email", id);
    return idPromise;
}).then(function(){
    let passPromise = tab.type("#password", pass);
    return passPromise;
}).then(function(){
    let loginPromise = tab.click(".submit_btn.ist_button.ist_button_red.sel_login");
    return loginPromise;
}).then(function(){
    let waitPromise = tab.waitForSelector("button.plus_add_button", {visible: true});
    return waitPromise;
}).then(function(){
    let IPKclickPromise = tab.click("button.plus_add_button");
    return IPKclickPromise;

}).then(function(){
    let waitPromise = tab.waitForSelector(".public-DraftStyleDefault-block.public-DraftStyleDefault-ltr", {visible: true});
    return waitPromise;
    }).then(function(){
        let passPromise = tab.type(".public-DraftStyleDefault-block.public-DraftStyleDefault-ltr", "Payment to Ms. Gurpreet");
        return passPromise;
        }).then(function(){
            let IPKclickPromise = tab.click(".ist_button.ist_button_red");
            return IPKclickPromise;
        }).then(function(){
            let IPKclickPromise = tab.click(".user_avatar.big.settings_avatar");
            return IPKclickPromise;
        }).then(function(){
            let pageUrlPromise = tab.goto("https://parabank.parasoft.com/parabank/index.htm");
            return pageUrlPromise;
        
         }).then(function(){
            let idPromise = tab.type("#loginPanel > form > div:nth-child(2) > input", "john");
            return idPromise;
        }).then(function(){
            let passPromise = tab.type("#loginPanel > form > div:nth-child(4) > input", "demo");
            return passPromise;
        }).then(function(){
            let IPKclickPromise = tab.click("#loginPanel > form > div:nth-child(5) > input");
            return IPKclickPromise;
        }).then(function(){
            let waitPromise = tab.waitForSelector("#leftPanel > ul > li:nth-child(3) > a", {visible: true});
            return waitPromise;
        }).then(function(){
            let IPKclickPromise = tab.click("#leftPanel > ul > li:nth-child(3) > a");
            return IPKclickPromise;
        
        }).then(function(){
            let waitPromise = tab.waitForSelector("#amount", {visible: true});
            return waitPromise;
        }).then(function(){
            let passPromise = tab.type("#amount", "100");
            return passPromise;
        }).then(function(){
            let IPKclickPromise = tab.click("#rightPanel > div > div > form > div:nth-child(4) > input");
            return IPKclickPromise;
        })
         
        
         .catch(function(err){
    console.log("error occured");
});





