---
title: '၂။ မဲရုံစာရင်းတစ်ခုအား ပြန်လည်သုံးသပ်ကြည့်ခြင်း'
module_id: 2
excerpt: 'ဤသင်ခန်းစာတွင် ကျွန်ုပ်တို့ မဲရုံစာရင်းတစ်ခုကို မည်ကဲ့သို့ ကြည့်ကြည့်ရန်နှင့် အဓိပ္ပာယ်ဖော်ကြည့်ရန် လေ့လာကြမည်။ Dataset ထဲတွင် ပါရှိသည့် အချက်အလက် များကို အနည်းငယ်သိရှိပြီးနောက် data များကို မွှေနှောက်စူးစမ်းရန်၊ အထူးသဖြင့် ခရိုင်တစ်ခုချင်းစီရှိ မဲရုံအရေအတွက် စုစုပေါင်းနှင့် မှတ်ပုံတင်ထားသည့် မဲဆန္ဒရှင် အရေအတွက်စုစုပေါင်းကို တွက်ရန် Excel ကို အသုံးပြုလျက် pivot table တစ်ခုပြုလုပ်မည်။'
---

ဤသင်ခန်းစာတွင် ကျွန်ုပ်တို့ မဲရုံစာရင်းတစ်ခုကို မည်ကဲ့သို့ ကြည့်ကြည့်ရန်နှင့် အဓိပ္ပာယ်ဖော်ကြည့်ရန် လေ့လာကြမည်။ Dataset ထဲတွင် ပါရှိသည့် အချက်အလက် များကို အနည်းငယ်သိရှိပြီးနောက် data များကို မွှေနှောက်စူးစမ်းရန်၊ အထူးသဖြင့် ခရိုင်တစ်ခုချင်းစီရှိ မဲရုံအရေအတွက် စုစုပေါင်းနှင့် မှတ်ပုံတင်ထားသည့် မဲဆန္ဒရှင် အရေအတွက်စုစုပေါင်းကို တွက်ရန် Excel ကို အသုံးပြုလျက် pivot table တစ်ခုပြုလုပ်မည်။

## နိဒါန်း

ရွေးကောက်ပွဲနေ့ စောင့်ကြည့်လေ့လာရန်အတွက် ပြင်ဆင်ရာတွင် အခြေခံလိုအပ်ချက်တစ်ခုမှာ သင့်နိုင်ငံရှိ မဲရုံစာရင်း အတိအကျကို ရွေးကောက်ပွဲနေ့မတိုင်မီ ကြိုတင်ရယူထားခြင်းဖြစ်သည်။ ဤစာရင်းတွင် ရွေးကောက်ပွဲ စီမံကျင်းပရေးအဖွဲ့ (EMB) မှ ရွေးကောက်ပွဲ ပြုလုပ်မည့် မဲရုံအားလုံးပါရှိရမည်။ အကယ်၍ သင်သည် ပြိုင်တူ မဲရေတွက်ခြင်း ([Parallel Vote Tabulation (PVT)](https://www.ndi.org/pvt)) ကဲ့သို့ နမူနာ (sample) အခြေခံသည့် စောင့်ကြည့်လေ့လာမှု မျိုးပြုလုပ်မည်ဆိုလျှင် သင့် နမူနာ (sample) အား ဤစာရင်းမှပင် ထုတ်ရမည်။

တစ်ခါတစ်ရံတွင် EMB များမှ မဲရုံစာရင်းများကို ထုတ်ပြန်သည့် format များသည် ခွဲခြမ်းစိတ်ဖြာရန် (analysis) ခက်ခဲ စေသည်။ ဥပမာ မဲရုံစာရင်းအား PDF ကဲ့သို့ ခွဲခြမ်းစိတ်ဖြာ၍ မရသည့် format တစ်ခုခုဖြင့် (စက်ဖြင့်ဖတ်၍ မရသည့် format တစ်ခုခုဖြင့်) ထုတ်ပြန်သည့်အခါ data များကို အခြား ခွဲခြမ်းစိတ်ဖြာနိုင်သည့် format (CSV XLS TXT စသည့် format များသို့) ပြောင်းရန် လိုသည်။ ဤကဲ့သို့ format ပြောင်းခြင်းကို လက်ဖြင့်လုပ်နိုင်သလို script ရေးပြီး အလိုအလျောက်လုပ်ရန် ခိုင်းစေနိုင်သည်။ [import.io](https://import.io/) သို့မဟုတ် [ScraperWiki](https://scraperwiki.com/) ကဲ့သို့ online data scraping tool များကိုလည်း အသုံးပြုနိုင်သည်။ တကယ်တမ်းတွင် ယခုအသုံးပြုမည့် data များမှာ မူလတွင် PDF file (ဥပမာ [Ashanti ဒေသအတွက် PDF]({{ site.url }}/\_assets/academy/exercise/Ghana_Ashanti_example.pdf)) များဖြင့်ဖြစ်သည်။ သင်အသုံးပြုနိုင်ရန်အတွက် စက်ဖြင့်ဖတ်နိုင်သည့် (machine readable) format တစ်ခုသို့ ပြောင်းပေး ထားသည်။ ယခု သင့်လက်ထဲတွင် မဲစာရင်း data သည် Excel ဖြင့် တွက်နိုင်၊ ဖတ်နိုင်ပြီး လိုသလိုလုပ်နိုင်သည့် format တွင်ရှိနေပြီဖြစ်သည့်အတွက် ခွဲခြမ်းစိတ်ဖြာရန် အသင့်ဖြစ်နေပြီ။

## Excel နှင့် စာရင်းများ ခွဲခြမ်းစိတ်ဖြာခြင်း

ယနေ့အချိန်တွင် Excel သည် တစ်ကမ္ဘာလုံးတွင် အသုံးအများဆုံး software ဖြစ်နေသောကြောင့် ဤသင်ခန်းစာတွင်လည်း ကျွန်ုပ်တို့သည့် Excel ကိုပင် အသုံးပြုကြမည်။ Excel သည် အတော်များပြားသည် အချက်အလက် ပမာဏကို မြန်ဆန်စွာ process လုပ်နိုင်ပြီး ကျွန်ုပ်တို့၏ အချက်အလက် ၂၆၀၀၀ (~26,000 data points) ကို အလွယ်တကူ ကစားနိုင်သည်။ ယခု ခွဲခြမ်းစိတ်ဖြာမှုတွင် မဲရုံစာရင်းများကို Excel ကိုအသုံးပြုလျှက် ရှာကြည့်ပြီး “pivot function” ကို အသုံးပြုလျှက် မဲရုံများ၏ ခရိုင်အလိုက်၊ ဒေသအလိုက် ဖြန့်ကျက်နေမှုကို ခွဲခြမ်းစိတ်ဖြာမည်။ Excel ရှိ pivot function မှာ မတူညီသည့် နယ်ပယ်များကို အခြေခံပြီး အချက်အလက်များကို အလွယ်တကူ စုကာ နည်းအမျိုးမျိုးဖြင့် အနှစ်ချုပ်၍ရသည့် လုပ်ဆောင်ချက် တစ်ခုဖြစ်သည်။ ထို့ကြောင့် pivot table များဖြင့် အချက်အလက် များကို လိုသလို အလွယ်တကူ ကစားနိုင်၊ သုံးသပ်နိုင်သည်။

## မဲရုံစာရင်းရှိ အချက်အလက်များကို သုံးသပ်ခြင်း

ခွဲခြမ်းစိတ်ဖြာ၍ရသည့် format ဖြင့်တည်ဆောက်ထားသည့် မဲရုံစာရင်းနမူနာတစ်ခုကို ကြည့်ကြပါစို့။ ဂါနာနိုင်ငံ၏ ၂၀၀၈ ရွေးကောက်ပွဲအပေါ်အခြေခံသည့် မဲရုံစာရင်းမှ စကြည့်ကြပါမယ်။ [၂၀၀၈ မဲရုံစာရင်းကို Excel format (XLS)]({{ site.url }}/\_assets/academy/exercise/Polling_Station_List_2008_1.xls) ဖြင့် အရင် download ချပါ။ ကျွန်ုပ်တို့သည် Pivot table တစ်ခုတည်ဆောက်ရန် Excel ကို အသုံးပြုပါမည်၊ သိုသော် သင့်အနေဖြင့် အခြား programme များအသုံးပြုနေလျှင် အဆင့်ပြေစေရန် PS 2008 file အား [Comma Separated Values format (CSV)]({{ site.url }}/\_assets/academy/exercise/Polling_Station_List_2008_1.csv) နှင့် [OpenDocument format (ODS)]({{ site.url }}/\_assets/academy/exercise/Polling_Station_List_2008_1.ods) format များနှင့်ပါ ပေးထားသည်။ ယခု document အားသိမ်းထားပြီး သင့်ကွန်ပျူတာပေါ်တွင် ဖွင့်ထားပြီးဖြစ်၍ ဘယ်အပေါ်မှစကာ row နှင့် column တစ်ခုချင်းစီကို ကြည့်ကြရအောင်။ ပထမဆုံး row တွင် ယင်းအောက်ရှိ အချက်အလက်များ၏ အမည်ပါရှိသည်။

### PS_Code (မဲရုံကုတ်အမှတ်)

ဘယ်ဘက်အစွန်ဆုံး column တွင် PS_Code တွေ့ပါလိမ့်မည်။ မည်သည့်အဓိပ္ပါယ်ဆိုလိုကြောင့် ခန့်မှန်းနိုင်ပါသလား။

[![Image 1]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image1.png)]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image1.png)

ယခု dataset တွင် PS_Code ကိုယ်စားပြုသည်မှာ မဲရုံကုတ် သို့မဟုတ် မဲရုံတစ်ခုချင်းစီအတွက် ထူးခြားအမှတ်အသား ဖြစ်သည်။ Document ကို အောက်သို့ scroll လုပ်ပြီး မဲရုံများကို မည်ကဲ့သို့ အမှတ်စဉ်ထားသည်ကို လေ့လာကြည့်ပါ။

ကော်လံ၏ ခေါင်းစဉ် (PS_Code) တွင် စာလုံးများ တဆက်တည်းဖြစ်နေကြောင်း မှတ်သားပါ။ မဲရုံစာရင်း အတော်များများ (ခြုံ၍ပြောရလျှင် ရွေးကောက်ပွဲဆိုင်ရာ dataset များ) အား EMB ၏ database မှ ထုတ်ယူထားခြင်းဖြစ်သည်။ Database များ၏ အခြေခံတစ်ချက်မှာ စာလုံးများအကြားတွင် နေရာ (space) ချန်ထား၍ မရခြင်းပင်။ ထို့ကြောင်း “PS”နှင့် “Code” တို့ကြားတွင် underscore (\_) ထည့်ပေးရခြင်းဖြစ်သည်။ Excel သည် space ပါသည့် data များကို process လုပ်နိုင်သော်လည်း ကော်လံခေါင်းစဉ်များကို space မခြားဘဲ အမည်တပ်ခြင်းသည် အကောင်းဆုံးဖြစ်သည်။

### PS_Name (မဲရုံအမည်)

PS_Name သည် မဲရုံများ၏ အမည်ကို စကားလုံးဖြင့် ရေးသားထားခြင်းကို ရည်ညွှန်းသည်။ စောင့်ကြည့် လေ့လာသူများအဖို့ ဤကော်လံသည်ပင် နားလည်ရအလွယ်ဆုံးဖြစ်ပါလိမ့်မည်။ စောင့်ကြည့် လေ့လာသူများသည် ဤကော်လံမှ တဆင့်ပင် ရွေးကောက်ပွဲနေ့တွင် မည်သည့်နေရာသို့သွားရမည်ကို သိနိုင်မည်။

[![Image 3]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image3.png)]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image3.png)

ဥပမာ row 180 A00179 ကိုကြည့်ပါ။ Adansi North ခရိုင်ရှိ Adansi Asokwa မဲဆန္ဒနယ်မှ ခန့်အပ်မည့် စောင့်ကြည့်လေ့လာသူသည် Pentecost Church Anitoa မည်သည့်နေရာတွင် ရှိကြောင်း သိရှိရမည် ဖြစ်သည်။ အဘယ့်ကြောင့်ဆိုသော် ယင်းနေရာသည် ရွေးကောက်ပွဲကျင်းပမည့်နေရာများထဲမှ တစ်ခုဖြစ်နေသောကြောင့်ပင်။

[![Image 6]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image6.png)]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image6.png)

### Region_Name (ဒေသအမည်)

သင် dataset ကို အောက်သို့ ဆွဲသွား (scroll down) လုပ်ကြည့်လျှင် “Region_Name” (ဒေသအမည်) ဟုခေါင်းစဉ်တပ်ထားသည့် column တွင် ပထဝီနယ်နိမိတ်အုပ်စုများတွင် ဤကော်လံသည် ထူးခြားသီးသန့် ဖြစ်နေသည့် အမည် အရေအတွက် အနည်းဆုံးရှိကြောင်း တွေ့လိမ်မည်။ ယင်းကြောင့်ပင် dataset ထဲတွင် Region_Name သည် အကြီးဆုံး အဆင့်ဖြစ်ပေသည်။

[![Image 12]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image12.png)]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image12.png)

### District_Name (ခရိုင်အမည်)

ဒေသ ပြီးနောက် ခရိုင် သည် dataset ထဲတွင် ဒုတိယ အကြီးဆုံး ပထဝီနယ်နိမိတ်ဖြစ်သည်။

[![Image 13]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image13.png)]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image13.png)

### Constituency_Name (မဲဆန္ဒနယ်အမည်)

ဤဥပမာတွင် constituency (မဲဆန္ဒနယ်) များသည် district (ခရိုင်) များထက်သေးငယ်ကြောင်းတွေ့ရမည်။ ဤ data ကို pivot table တွင် ကြည့်သည့်အခါ ခရိုင်များ၊ ဒေသများနှင့် နှိုင်းစာလျှင် dataset ထဲတွင် မဲဆန္ဒနယ် မည်မျှ ရှိကြောင်း တွေ့ရမည်။

[![Image 2]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image10.png)]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image10.png)

### Registered_Voters (စာရင်းသွင်းထားသော မဲဆန္ဒရှင် အရေအတွက်)

နောက်ဆုံးတစ်ခုအနေဖြင့် ကျွန်ုပ်တို့တွင် မဲရုံတစ်ခုချင်းစီတွင် မဲပေးနိင်မည့် မှတ်ပုံတင်ထားသည့် မဲဆန္ဒရှင် အရေအတွက်ရှိသည်။ နေရာအတော်များများတွင် မဲရုံတစ်ရုံ၌ မဲပေးနိုင်သည့် အများဆုံး မဲပေးသူအရေအတွက် ကို ကန့်သတ်ထားသည်။ တချို့နိုင်ငံများတွင် ဤကန့်သတ်ချက်သည် ၇၀၀ ထက်မပို။ အခြားနိုင်ငံများတွင်မူ မြို့ပြဒေသများ၌ မှတ်ပုံထားသည့် မဲပေးသူဦးရေ တစ်ထောင် သို့မဟုတ် ထို့ထက်ပို၍ ရှိနိုင်သည်။ ဤသို့ကန့်သတ်ထားခြင်းမှာ မဲရုံများကို လွယ်ကူစွာ စီမံအုပ်ချုပ်နိုင်ရန်ဖြစ်ပြီး၊ အချိန်အလွန်အကျွံစောင့်ရခြင်း ကြောင့် မဲပေးသူများ မဲပေးခွင့်ဆုံးရှုံးခြင်းတို့ကို တားဆီးရန်ဖြစ်သည်။ ဤလေ့ကျင့်ခန်းတွင် သုံးသည့် dataset များအတွက် အရေအတွက်ကို ၁၀၀၀ အဖြစ်ကန့်သတ်ထားသည်။

[![Image 7]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image7.png)]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image7.png)

## Data များကို ခွဲခြမ်းသုံးသပ်ရာတွင် အကူအညီဖြစ်စေရန် Pivot Table တစ်ခုရေးဆွဲခြင်း (Excel)

တကယ်တမ်းပြောရလျှင် pivot table ဆွဲခြင်းသည် ယခုလေ့ကျင့်ခန်း၏ အလွယ်ကူဆုံး အစိတ်အပိုင်း ဖြစ်သည်။ Data များကိုမည်ကဲ့သို့ လှည့်ပတ်ကစားရမည်ကို နားလည်ရန်မှာ ပိုခက်ခဲမည်။ အောက်ပါ အဆင့်များကို Windows ကွန်ပျူတာ အသုံးပြုသူများအတွက် စီစဉ်ထားပြီး Excel 2010 မှ screenshot များကိုပါ တပါတည်းဖော်ပြပေးထားသည်။ သင် Mac ကွန်ပျူတာသို့မဟုတ် ယခင် Windows အဟောင်း တစ်ခုခုအသုံးပြုလျှင် ရုပ်ထွက် ပြောင်းနိုင်သည်။

#### ၁။ အားလုံးကိုရွေးပါ (အားလုံးကို select လုပ်ပါ)

ဤစာရွက်ရှိ data အားလုံးကို select လုပ်လိုသည်။ ယင်းသို့လုပ်ရန် PS_Code ရှိရာ cell A1 ကို နှိပ်ပါ။ ပြီးနောက် Control နှင့် A ကို တွဲနှိပ်ပါ (Control ခလုတ်ကို ဖိနှိပ်ထားပြီး ကီးဘုတ်ပေါ်မှ A ကိုနှိပ်ပါ)။ တြိဂံ ပုံလေးပါသည့် ဘယ်ဘက်အပေါ်ထောင့်ကွက် ကလေးကိုလည်းနှိပ်နိုင်သည်။

[![Image 4]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image4.png)]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image4.png)

#### ၂။ ဇယားထည့်ခြင်း (Inserting the table)

ယခု data များကို select လုပ်ထားပြီးနောက်တွင် အပေါ် menu ရှိ “Insert”tab ကိုသွားနှိပ်ပါ။ ထို့နောက် ဘယ်ဘက်ရှိ “Pivot Table” ကိုနှိပ်ပါ။ “Create Pivot Table” ဟုဆိုပြီး pop-up window တစ်ခုပေါ်လာ လိမ့်မည်။

[![Image 11]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image11.png)]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image11.png)

ရွေးချယ်စရာ options များကို default (မူလအနေအထားအတိုင်းထားခြင်း) အတိုင်းထား၍ “OK”ကိုနှိပ်ပါ။ Excel သည် worksheet အသစ်တစ်ခုတွင် pivot table အသစ်တစ်ခု လုပ်ပေးပါလိမ့်မည်။

[![Image 2]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image2.png)]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image2.png)

#### ၃။ ခရိုင်အလိုက်ရွေးထုတ်ခြင်း (Sorting by districts)

Pivot table တစ်ခု ဖန်တီးထားပြီးသည့်အတွက် data များနှင့် စတင်၍ အလုပ်လုပ်နိုင်ပြီ။ သင့်ညာဘက်တွင် “Pivot Table Field List”ဟု အမည်ပေးထားသည့် ပြတင်းတစ်ခုရှိသည်။ “District_Name”ကို နှိပ်ပြီး ယင်းကို “Row Labels”ထဲသို့ဆွဲထည့်ပါ။ ဤသို့လုပ်လိုက်သည်နှင့် “District_Name”နယ်ပယ်ထဲတွင် စာရင်းထည့်ထားသည့် တန်ဖိုးကိုလိုက်၍ အရာအားလုံးကို ရွေးထုတ်တော့ပေတော့မည်။ “District_Name” သည်ယခုအခါ “Row Labels” ဟုခေါ်သည့် ညာဘက်အောက်နားရှိ window တစ်ခုတွင် စာရင်းပါသွားသည်ကို သတိပြုပါ။ မှန်မှန်ကန်ကန် လုပ်ဆောင်ထားလျှင် ကျွန်ုပ်တို့သည် ခရိုင်အားလုံးကို Column A တွင်ဖြည့်လျက် ရရှိမည်။ Scroll down လုပ်ကြည့်လျှင် ခရိုင်အမည်စုစုပေါင်း ၂၂၃ ခုနှင့် အောက်ဆုံး row တွင် စုစုပေါင်းအရေအတွက် တစ်ခုရရှိမည် (ယခုအချိန်ထိ စုစုပေါင်းအရေအတွက်ကို မပြသေး)။ ပြီးနောက် အပေါ်သို့ ပြန်တက်ပါ။ ယခုရထားသည့် နယ်ပယ်များ (fields) ကို အခြေခံ၍ နောက်ထပ် criteria (စံ) များ ပေါင်းထည့်နိုင်သည်။

[![Image 14]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image14.png)]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image14.png)

#### ၄။ မဲရုံအရေအတွက်ကိုရှာခြင်း

နောက်တစ်ဆင့်အဖြစ် ခရိုင်တစ်ခုစီမှာ မဲရုံမည်မျှရှိသည်ကို ရှာကြပါစို့။ ဘယ်ဘက်ရှိ “PS_Code” ကိုဆွဲယူပြီး အောက်ခြေရှိ “Values”နေရာတွင် သွားထည့်ပါ။ လုပ်ဆောင်ချက်မှန်ကန်လျှင် pivot table သည် ခရိုင်တစ်ခုချင်းစီတွင် PS_Code အတွက် တန်ဖိုးရှိသည့် cell များအားလုံးကို အလိုအလျောက်ရေတွက်ပေး ပါလိမ့်မည်။ ဤအချက်ကို စစ်ဆေးကြည့်လိုပါက Column ရှိတန်ဖိုးများပေါ်တွင် Mouse pointer ကိုထောက်၍ “Count of PS_Code”ပေါ် မပေါ် ကြည့်နိုင်သည်။ ယခုအခါ “Count of PS_Code”သည် ညာဘက်အောက်နားရှိ window ရှိ “Values” အောက်တွင် စာရင်းဝင်နေကြောင်းတွေ့ရမည်။ သင်မှန်မှန် လုပ်ဆောင်ခဲ့ပါက Ablekuma အတွက် 407၊ Abura/Asebu/Kwamankese စသည် တို့အတွက် 91 ပြနေလိမ့်မည်။ အောက်တွင် ကြည့်ပါ။

အကယ်၍ Column B တွင် စုစုပေါင်းအဖြစ် 00 သာပေါ်နေလျှင် Excel အား မတူညီသည့် row/code များ၏ အရေအတွက်ကို ရေတွက်ခိုင်းရမည်။ ယင်းအစား Excel သည် ၄င်းကော်လံရှိ value များအားလုံးကို ပေါင်းနေသည်၊ ကွင်းထဲရှိ တန်ဖိုးများမှာ စာသားများဖြစ်နေသည့်အတွက် အပေါင်းများ၏ ရလာဒ်မှာ သုည ဖြစ်သွားသည်။ ကွင်း(field) များကို Excel က (ပေါင်းခြင်းမဟုတ်ဘဲ) ရေတွက်စေရန် Values window ရှိ “Sum of PS_Code” သို့သွားပြီး အောက်သို့ပြထားသည့် မျှားကို နှိပ်ရမည်။ ထိုအခါ “Value field settings”ကို နှိပ်နိုင်သည့် window တစ်ခုရလာမည်။ “Summarise Value Field By” အောက်မှ “Count” ကိုရွေးပါ။ သင့်လုပ်ဆောင်ချက်မှန်ကန်သည့်အခါ Ablekuma အတွက် 407 ၊ Abura/Asebu/Kwamankese စသည်တို့အတွက် 91 ကို ပြပါလိမ့်မည်။ အောက်တွင်ကြည့်ပါ။

[![Image 8]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image8.png)]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image8.png)

ကဲ အခု သင် Excel ထဲမှာ pivot table တစ်ခုရေးဆွဲတတ်သွားပါပြီ။

#### ၅။ ခရိုင်တစ်ချင်းစီအလိုက် မှတ်ပုံတင်ထားသည့် မဲဆန္ဒရှင် အရေအတွက် တွက်ချက်ခြင်း

အခုတစ်ခါ ခရိုင်တစ်ခုစီမှာ မှတ်ပုံတင်ထားသည့် မဲဆန္ဒရှင် မည်မျှရှိကြောင်း ရှာကြည့်ရအောင်။ “Registered_Voters” ကို click နှိပ်ပြီး Values box ထဲသို့ဆွဲထည့်ပါ။ ကျွန်ုပ်တို့ လိုချင်သည်မှာ မှတ်ပုံတင်ထားသည့် မဲဆန္ဒရှင် အရေအတွက် အတွက် values များ၏ စုစုပေါင်းဖြစ်သည်။ သို့သော် ယခုအချိန်၌ Excel သည် “Count of Registered_Voters”ကိုပြနေလိမ့်မည် (ဤအချက်ကို သိနိုင်သည်။ အဘယ်ကြောင့်ဆိုသော် ကော်လံ B တွင် စာရင်းတင်ထားသည့် “Count of PS_Code” နှင့် တူညီသည့် အရေအတွက်ကို ကော်လံ C တွင်လည်းပြနေလိမ်မည်)။ Excel ကို “Registered_Voters” field များကို ပေါင်းခိုင်းရန် (row တစ်ခုချင်းစီကို ပေါင်းခြင်းအစား) ကွန်ပျူတာမျက်နှာပြင် ညာဘက်အောက်နားရှိ “Values” window မှ “Count of Registered_Voters” သို့သွားပြီး အောက်သို့ပြထားသည့် မျှားကို click နှိပ်ရမည်။ ထိုအခါ “Values field setings” ကို click နှိပ်နိုင်သည့် window အသစ်တစ်ခုရလာမည်။ “Summarise Value Field By” အောက်မှ “Sum” ကို ရွေးပါ။ Excel သည် ခရိုင်တစ်ခုချင်းစီမှ မှတ်ပုံတင်ထားသည့် မဲဆန္ဒရှင် အရေအတွက်ကို ပေါင်းပေးပြီး သင်အောက်တွင် မြင်နိုင်သည့်အတိုင်း ကိန်းဂဏန်းအကြီးများကို ပြလိမ့်မည်။

[![Image 9]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image9.png)]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image9.png)

#### ၆။ ခရိုင်တစ်ခုချင်းစီအလိုက် မဲဆန္ဒရှင် အချိုးအစားကို တွက်ချက်ခြင်း

နောက်ဆုံးတစ်ခုအဖြစ် ခရိုင်အလိုက် ပြန့်ကြဲနေသည့် မဲဆန္ဒရှင် ရာခိုင်နှုန်းများကို ကြည့်ကြပါစို့။ အပေါ်ရှိ အဆင့် ၅ တွင် ပြုလုပ်ခဲ့သည့် အဆင့်တချို့ကိုပင် ပြန်လုပ်ရပါမည်။ ပထမဆုံးအနေဖြင့် “Registered_Voters” ကို Values field တွင် ပြန်ထည့်ပါ။ ညာဘက်အောက်နားရှိ Values window မှ “Count of Registered_Voters” အတန်းသို့ သွားပါ။ ထို့နောက် အောက်သို့ညွှန်ပြထားသည့် မျှားကို click နှိပ်ပါ။ ပြီးလျှင် window အသစ်တစ်ခုရရန် “Value field settings”ကို click နှိပ်ပါ။ “Summarise Value Field By” အောက်ရှိ “Sum” ကိုရွေးပြီး “Show values as” tab ကို click နှိပ်ပါ။ အောက်သို့ပွင့်ကျလာသည့် စာရင်းတွင် “show values as percentage (%) of column total” ကို ရွေးပြီး “OK” ကို click နှိပ်ပါ။ ယခုအခါ ခရိုင်တစ်ခုစီရှိ မှတ်ပုံတင်ထားသည့် မဲဆန္ဒရှင် အရေအတွက်ကို မှတ်ပုံတင်ထားသော မဲဆန္ဒရှင် အရေအတွက်စုစုပေါင်း၏ ရာခိုင်နှုန်းအဖြစ် ရရှိတော့သည်။

[![Image 5]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image5.png)]({{ site.url }}/\_assets/images/academy/reviewing-a-polling-station-list/image5.png)

## Data များကို ဆန်းစစ်ရန် Pivot table ကို အသုံးပြုခြင်း

Pivot table ကို အသုံးပြုခြင်းသည် data အများအပြားကို အချိန်တိုအတွင်း ဆန်းစစ်ရန် အလွန်အမင်း လွယ်ကူသည့် နည်းလမ်းတစ်ခုဖြစ်သည်။ သို့တစေ pivot table ကိုတည်ဆောက်ရာတွင် မကောင်းသည့် data များကို အသုံးပြုမိလျှင် ပြဿနာတော့ ဆိုက်မည်ပင်။ ခွဲခြမ်းစိတ်ဖြာသူ တစ်ယောက်အနေဖြင့် သင်သည် data ကို စိစစ်ပြီး အဓိပ္ပါယ်ရှိ မရှိ၊ တိကျမှုရှိမရှိ၊ အတတ်နိုင်ဆုံး“clean” ဖြစ် မဖြစ် စစ်ဆေးပေးရမည်။

ဥပမာ သင်၏ pivot table ရှိ row 147 နှင့် row 148 တို့ကို ကြည့်ပါ။ Row 147 တွင် Moagduri ဟုခေါ်သည့် ခရိုင်တစ်ခုရှိသကဲ့သို့ row 148 တွင် Moagdurii ဟုခေါ်သည့် ခရိုင်တစ်ခုရှိသည်။ ဤအချက်သည် တိုက်ဆိုင်မှု တစ်ခုမျှသာ ဖြစ်နိုင်သလား။ ဖြစ်ချင်မှ ဖြစ်မည်။ သင် data အကြမ်းစာရွက်သို့ ပြန်သွားပြီး row 15120 နားတစ်ဝိုက်သို့ scroll down လုပ်ကြည့်သည့်အခါ ခရိုင်အမည်သည် i နှစ်လုံးဖြင့် Moagdurii သို့ပြောင်းသွားကြောင်းတွေ့ရလိမ့်မည်။ Data ထဲတွင် Moagduri နှင့် Moagdurii တို့ကို ဆက်လက်၍ ဆန်းစစ်ကြည့်ရာ မဲရုံကုတ်နံပါတ်လည်းတူ၊ ခရိုင်နှစ်ခုလုံးသည် ဒေသတစ်ခုတည်းအတွင်းလည်း ကျရောက်ပြီး၊ မဲဆန္ဒနယ်များတွင်လည်း မှတ်ပုံတင်ထားသည့် မဲဆန္ဒရှင်အရေအတွက် အလွန်ဆင်တူနေ ကြောင်း တွေ့ရသည်။ ဤအချက်တို့ကိုထောက်၍ EMB သည် database ထဲတွင် ခရိုင်၏ အမည်ကို စာလုံးမှားပေါင်းခြင်းဟု သံသယရှိစရာဖြစ်လာသည်။ ဤအဆင့်တွင် analyst တစ်ယောက်အနေဖြင့် သင်သည် လုပ်ဖော်ကိုင်ဖက်တစ်ယောက် သို့မဟုတ် အခြား အခြေအနေကို အတွင်းကျကျသိသည့် သူတစ်ယောက်ယောက်နှင့် data ကို ပြန် စိစစ်ရပေတော့မည်။

## သင် မည်သည့်အရာများကို တွေ့ရှိသနည်း။

Pivot table ကို နောက်တစ်ကြိမ် လေ့လာပြီး အောက်ပါမေးခွန်းများကို ဖြေကြည့်ပါ။

1.  မည်သည့် ခရိုင် ၃ ခုတွင် မှတ်ပုံတင်ထားသည့် မဲဆန္ဒရှင် အရေအတွက် အများဆုံး ရှိသနည်း။
2.  မည်သည့် ခရိုင် ၃ ခုတွင် မှတ်ပုံတင်ထားသည့် မဲဆန္ဒရှင် အရေအတွက် အနည်းဆုံးရှိသနည်း။
3.  အပိုဆု မေးခွန်း။ မူရင်း မဲစာရင်းကို ကြည့်ပါ။ အထူးအဆန်း ဖြစ်နေသည့် တစ်စုံတစ်ရာ တွေ့သလား (Moagduri/ Moagdurii ခရိုင်နာမည်များအပြင်)