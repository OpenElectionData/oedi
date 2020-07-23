---
title: '၃။ အသုံးချခြင်း။ မဲရုံအချက်အလက်များကို အကျဉ်းချုံးခြင်း'
lang: my
module_id: 3
permalink: '/academy/application-summarizing-the-polling-station-data/'
excerpt: "ဤသင်ခန်းစာတွင် အချက်အလက် ခွဲခြမ်းစိတ်ဖြာခြင်း (data analysis) ဖြစ်စဉ်အဆင့်ဆင့်ရှိ အဆင့် ၅ ဆင့်ကို ပြန်လည်သုံးသပ်မည်။ ထို့နောက် data များနှင့် data file များကို ကိုင်တွယ်ပုံနှင့် စပ်လျဉ်း၍ အကြံပြုချက်များပေးမည်။ နောက်ဆုံး၌ လေ့ကျင့်ခန်း (၁) မှ မဲရုံစာရင်းကို အသုံးပြုလျက် လက်တွေ့လေ့ကျင့်ခန်းတစ်ခု ပြုလုပ်ကြည့်မည်။ ယင်းလေ့ကျင့်ခန်းတွင် Excel မှ လုပ်ဆောင်ချက်များကို အသုံးပြု၍ “Registered_Voters” variable (စာရင်းသွင်းထားသော မဲဆန္ဒရှင် ကိန်းရှင်) ကို အကျဉ်းချုပ်ကြည့် ကြမည်။"
---

ဤရှင်းလင်းခန်းတွင် အချက်အလက်များကို ခွဲခြမ်း စိတ်ဖြာသည့် ဖြစ်စဉ်ရှိ အဆင့် (၅) ဆင့်ကို ပြန်လည် သုံးသပ်မည် ဖြစ်သည်။ ထို့နောက် data များနှင့် data file များကို ကိုင်တွယ် ဖြေရှင်းပုံများအတွက် အကြံပြုမည် ဖြစ်သည်။ နောက်ဆုံး၌ "Registered\_Voters" (မှတ်ပုံတင်ထားသော မဲဆန္ဒရှင်) ကိန်းရှင်ကို အနှစ်ချုပ်(summarise) လုပ်ရန် အလို့ငှာ လေ့ကျင့်ခန်း(၁) မှ မဲရုံစာရင်းကို အသုံးပြုလျှက် လေ့ကျင့်ခန်း( ၂) တွင် သင်ခဲ့ရသည်များကို ပြန်လည်အသုံးချနိုင်မည့် လေ့ကျင့်ခန်း တစ်ခု ပြုလုပ်ကြမည်။

အချက်အလက် ခွဲခြမ်းစိတ်ဖြာသည့်ဖြစ်စဉ်ရှိ အဆင့် (၅) ဆင့်
------------------------------------------------------

### အဆင့် (၁)။ မေးခွန်းတစ်ခုခု (သို့မဟုတ်) သတ်သတ်မှတ်မှတ် ရည်ရွယ်ချက် တစ်ခုခုဖြင့် အစပြုပါ။

Dataset အား မည်သည့်အတွက်ကြောင့် ကြည့်ရှုနေရသည်ကို အချိန်နည်းနည်းယူ၍ စဉ်းစားပါ။ အချက်အလက်များထဲတွင် သင်တွေ့ရန် မျှော်လင့်သည့်၊ သင်တွေ့ရန် မမျှော်လင့်သည့် အရာများကို စဉ်းစားပါ။ သင်၏ ရည်ရွယ်ချက် ရှင်းလင်းစွာ ပေါ်လာသည် အထိ သင့်ကိုယ်သင် စဉ်းစားခိုင်းပါ။ သို့မှသာ ဤဖြစ်စဉ်ရှိ အဆင့်များကို လုပ်ဆောင်ရာတွင် ပိုမို ထိရောက်ပေမည်။ ဥပမာ လေ့ကျင့်ခန်း [(၁) မှ မဲရုံစာရင်းကို ကြည့်လျက် အောက်ပါမေးခွန်းများအား ကျွန်ုပ်တို့ ဖြေရန်ကြိုးစားကြည့်နိုင်သည်။](/my/academy/reviewing-a-polling-station-list/)

*   မဲရုံစာရင်းသည် ပြီးပြည့်စုံသည့် ပုံပေါက်သလား။
*   မဲရုံစာရင်းသည် မှန်ကန်သည့် (သို့မဟုတ်) အမှားများကင်းသည့် (clean) ပုံပေါက်သလား။
*   မဲရုံတစ်ရုံချင်းစီတွင် မှတ်ပုံတင်ထားသည့် ပျမ်းမျှ မဲဆန္ဒရှင် အရေအတွက်သည် မည်မျှနည်း၊ Spread (ဖြန့်ကျက်မှု)သည် မည်မျှရှိသနည်း။
*   မတူညီသည့် ပထဝီ နယ်နိမိတ်တွင် ရှိသည့် မဲရုံများဖြန့်ဖြူးမှုသည် (distribution of polling stations) မည်သည့်ပုံပေါက်သနည်း။ ဤဖြန့်ဖြူးမှုများသည် မဲစာရင်းတစ်မှနောက်တစ်ခု အချိန်အပေါ်မူတည်၍ ပြောင်းလဲခဲ့သလား (သင့်ထံတွင် တစ်ခုထက်ပိုသည့် မဲစာရင်းများ ရှိလျှင် ))
*   နမူနာ (Sample) တစ်ခုရေးဆွဲရန် မဲရုံစာရင်းကို သုံးနိုင်သလား

### အဆင့် (၂) အချက်အလက်များကို ရယူခြင်း

သင်သည် အချက်အလက် များကို ခွဲခြမ်းစိတ်ဖြာသည့် ဖြစ်စဉ်ကို စတင်ရခြင်း၏ အကြောင်းရင်းကို စဉ်းစားပြီး ဖြစ်သည့်နောက် ယခုအခါ သင်လိုအပ်သည့် အချက်အလက်များကို ရယူရမည့် အချိန် ကျရောက်လာပါပြီ။ အချက်အလက်များနှင့် တစ်စုံတစ်ရာ မပြုလုပ်မီ မည်သည့်နည်းနှင့်မျှ တို့ထိထားခြင်းမရှိသည့် အချက်အလက် မိတ္တူ (data copy) တစ်ခုသိမ်းထားပေးပါ။

### အဆင့် (၃) အချက်အလက်များကို မွှေနှောက် (wrangle) ပါ၊ ရှင်းလင်း (clean) ပါ

အချက်အလက် ခွဲခြမ်းစိတ်ဖြာသည့်ဖြစ်စဉ်တစ်ခုလုံး၏ ၈၀% ရာခိုင်နှုန်းမှာ data များကို ပုံစံပြောင်းလဲ (convert) လုပ်ခြင်း၊ ရှင်းလင်း (clean) ခြင်း၊ အစီအစဉ်ပြောင်းလဲခြင်း (reformat လုပ်ခြင်း)ဖြင့် ကုန်ဆုံးစေရကြောင်း အတွေ့အကြုံရှိသည့် အချက်အလက် ခွဲခြမ်းစိတ်ဖြာသူများ အသိပင်ဖြစ်သည်။ ပထဆုံးအနေဖြင့် သင်သည် ပျောက်နေသည့် အချက်အလက်များရှိသလား၊ အချက်အလက်များထဲတွင် အမှားတစ်စုံတစ်ရာရှိသလား စီစစ်ဆုံးဖြတ်ရမည်။ ထို့နောက် အချက်အလက်များကို မွှေနှောက်ကာ တစ်ခုနှင့် တစ်ခု ပုံစံတူညီအောင် ပြောင်းလဲရမည်။ ဥပမာ row တစ်ခုစီချင်းစီအတွက် ကိန်းရှင် (variable) များသည် column တစ်ခုတည်းတွင် ပေါင်းမိကောင်းပေါင်းမိနိုင်သည် (ဥပမာ “မြို့” နှင့် “ပြည်နယ်”တို့အတွက် အချက်အလက်များသည် column တစ်ခုတည်းအတွင်းကျရောက်နေနိုင်သည်၊ သို့ဖြစ်လျှင် မြို့နှင့် ပြည်နယ်ကို column နှစ်ခုသို့ ခွဲထည့်ပေးရမည်)။ အချက်အလက်များသည် ခွဲခြမ်းစိတ်ဖြာ (analyse) ၍ရနိုင်သည့် ပုံစံ (format) နှင့်ဖြစ်ချင်မှလည်းဖြစ်မည်။ တနည်းအားဖြင့် အချက်အလက်များသည် စက်နှင့်ဖတ်၍ရသည့် (machine readable) format နှင့် ဖြစ်ချင်မှ ဖြစ်မည်၊ ထိုအခါ စက်ဖြင့်ဖတ်နိုင်သော ရအောင် မည်ကဲ့သို့ ပြောင်းလဲ မည်ကို စဉ်းစားရမည်။ လေ့ကျင့်ခန်း (၁) တွင် ၂၀၀၈ မဲရုံ အချက်အလက်များကို မူလအစတွင် PDF file များဖြင့် သိမ်းထားခဲ့သည်ကို အမှတ်ရပါ။ ၄င်း file များထဲမှ သတင်းအချက်အလက်များကို ကျွန်ုပ်တို့ စက်ဖြင့်ဖတ်၍ ရသည့် ပုံစံသို့ ပြောင်းခဲ့ကြသည် (ဥပမာ CSV နှင့် XLS file များသို့ ပြောင်းခဲ့ကြသည်)။ ခွဲခြမ်းစိတ်ဖြာခြင်း မလုပ်မီ မတူညီသော dataset နှစ်ခုမှ အချက်အလက်များကို ပေါင်းစပ်ရန် လိုကောင်းလည်းလိုနိုင်သည်။

### အဆင့် (၄ ) သင်၏ အချက်အလက်များထဲမှ စိတ်ဝင်စာရာ ကိန်းရှင် (variable) များကို အနှစ်ချုပ်(summarise) ါ။

သင်စိတ်ဝင်စားရာ variable တစ်ခုချင်းစီအတွက် အချက်အလက်များ၏ မည်သည့်အချက်သည် စံဖြစ်သနည်း၊ အချက်အလက်များ၏ ဖြန့်ကြက်မှု (spread) အနေထားက အဘယ်နည်း စသည့် မေးခွန်းများကို ဖြေနိုင်ရမည်။ လေ့ကျင့်ခန်း (၂) တွင် တိရစ္ဆာန်များ၏ အမြှင့်အတွက် စံ ကိုမည်ကဲ့သို့ တွက်ချက်ရမည် (ဗဟို (center) သို့မဟုတ် ပျမ်းမျှ (average) စသည်ဖြင့်)၊ standard deviation ကို အသုံးပြုလျှက် အချက်အလက်များ မည်ကဲ့သို့ ဖြန့်ကြက် (spread) နေကြသည်တို့ကို လေ့လာခဲ့ပြီးဖြစ်သည်။

### အဆင့် (၅) ထပ်ဖန်တလဲလဲလုပ်ပါ

အချက်အလက် ခွဲခြမ်းစိတ်ဖြာခြင်း (data analysis) သည် များသောအားဖြင့် ထပ်ဖန်တလဲလဲ ပြုလုပ်ရသည့် ဖြစ်စဉ် တစ်ခုဖြစ်သည်။ တချို့ variable များကို ပထမအကြိမ် အနှစ်ချုပ်ပြီးသည်နှင့်တပြိုင်နက် နောက်ထပ် ခွဲခြမ်းစိတ်ဖြာမှုများ မပြုလုပ်မီ သင်သည် အချက်အလက်များကို မွှေနှောက် (wrangle) လုပ်ရန်လိုအပ်နေကြောင်း သိလာလိမ့်မည် (ဥပမာ နောက် datset တစ်ခုနှင့် ပေါင်း(merge) ခြင်း။ အချက်အလက်များကို အနှစ်ချုပ် ခြင်းသည်ပင် သင့်ကို ခွဲခြမ်းစိတ်ဖြာမှု ပြုလုပ်ရခြင်း ရည်ရွယ်ချက် အသစ်တစ်ခုသို့ ဦးတည်ခေါ်ဆောင်သွားလိမ့်မည်။ ယင်းကြောင့်ပင် ဖော်ပြခဲ့သော ဖြစ်စဉ်အား တဖန် လုပ်ဆောင်ရပေဦးမည်။

ဤ သင်ခန်းစာကို တိုတိုနှင့် နားလည်လွယ်စေရန် အချက်အလက်များ ခွဲခြမ်းစိတ်ဖြာခြင်း ဖြစ်စဉ်ရှိ အဆင့် (၄) သို့ ကျော်သွားမည်။ သင့်ထံတွင် လိုအပ်သည့်အချက်အလက်များ format မှန်ကန်စွာရှိပြီး၊ သတ်သတ်မှတ်မှတ်မေးခွန်းများနှင့် ရည်ရွယ်ချက်တို့ ရှိသည် ဟုယူဆကြပါစို့။ လက်တွေ့လေ့ကျင့်ခန်းများကို ဆောလျင်စွာ မပြုလုပ်မီ အချက်အလက်များကို မည်သို့ ကိုင်တွယ်မည်နှင့် စပ်လျဉ်း၍ အကြံပြုထားသည်များကို ကြည့်ကြပါစို့။

အချက်အလက်များကို ကိုင်တွယ် အသုံးပြုခြင်းနှင့် စပ်လျဉ်း၍ အကြံပြုထားချက်များ
--------------------------------------------------------------------------

*   သင်အလုပ်လုပ်မည့် data file မိတ္တူကို မူရင်း data file နှင့် သပ်သပ်ထားပါ။ သို့မှသာ ပြုပြင်ထားသည်များကို မူရင်း data များနှင့် ပြန်တိုက်စီစစ်နိုင်မည်။
*   အကယ်၍ spreadsheet file တစ်ခုကို အသုံးပြုလျှင် တွက်ချက်ထားသည်များကို နောက် sheet တစ်ခု သို့မဟုတ် tab တစ်ခုတွင် သိမ်းပါ
*   ဖြစ်စဉ်တွင်ပြုလုပ်သည့် အဆင့်များကို မှတ်တမ်းတင်ပါ။ သို့မှသာ တစ်ဆင့်ချင်းပြန်သွားနိုင်ပြီး ပုံသေနည်း တစ်ခုခု မည်သည့်နေရာတွင် မှားယွင်းသွားသည်ကို ရှာဖွေနိုင်မည်။ ဤသို့ပြုလုပ်ခြင်းဖြင့် တွက်ချက်မှုများ မလုပ်မီ သင် အချက်အလက်များကို မည်သို့ပြောင်းခဲ့သည်ကို သိနိုင်မည်။
*   Sort data function ကိုအသုံးပြုသည့်အခါတိုင်း အထူး အထူးဂရုပြုပါ။ အရာအားလုံးကို highlight လုပ်ထားပြီးဖြစ်ကြောင်းသေချာပါစေ။ အန္တရယ်အကင်းဆုံးဖြစ်စေရန် sort data function ကို မည်သည့်အခါမျှ မသုံးပါနှင့်။
*   Cell များကို မပေါင်းပါနှင့် (merge မလုပ်ပါနှင့်)။ Cell များကို ပေါင်းခြင်းဖြင့် ပုံပန်းသဏ္ဍာန်အားဖြင့် လှပသွားသော်လည်း သင်အနေဖြင့် data များကို automate လုပ်လို့အခါ၊ ပြန်လည်စီစဉ် (re-arrange) လုပ်လိုသည့်အခါ အခက်တွေ့ပေလိမ့်မည် (ဥပမာ layout ပြောင်းလိုသည့်အခါ)။ ယင်းအစား အရောင်များကို အသုံးပြုပါ၊ cell border (အနား) များကို ဖယ်ရှားခြင့်ဖြင့်သာ ရုပ်ထွက်လှအောင်လုပ်ပါ။

ယခုသင်သည် ကောင်းမွန်သည့် အချက်အလက် ကျန်းမာရေးကို မည်သို့မည်ပုံ ကျင့်သုံးရမည်ကို သိရှိပြီးဖြစ်သည့်အတွက် လေ့ကျင့်ခန်း [(၁) မှ မဲရုံစာရင်းကို ပြန်လည်ဆန်းစစ်ကြပါစို့။](/my/academy/reviewing-a-polling-station-list/).

လက်တွေ့လေ့ကျင့်ခန်း။ Excel ကိုအသုံးပြု၍ မဲရုံစာရင်းကို (ပြန်)စစ်ဆေးခြင်း
------------------------------------------------------------------------

[ရွေးကောက်ပွဲ အချက်အလက် ဆိုင်ရာသင်တန်း၏ ပထမအခန်း](/my/academy/reviewing-a-polling-station-list/) တွင် [မဲရုံစာရင်းတစ်ခုကို (XLS format ဖြင့်)](/files/academy/exercise/Polling_Station_List_2008.xls) ကျွန်ုပ်တို့ စစ်ဆေးခဲ့ကြသည် ။ သီအိုရီအရ ပြောရလျှင် file ထဲတွင် နိုင်ငံတစ်နိုင်ငံ အတွင်းရှိ မဲရုံအားလုံးပါရှိ စာရင်းပါရှိမည်ဟု ယူဆရသည်။ ယင်း file ကိုဖွင့်၍ အချက်အလက် များကို နောက်တစ်ကြိမ်လေ့လာပါ။ ယင်း အချက်အလက် များကို scroll လုပ်ပြီးကြည့်လျှက် သင့်ကိုယ်သင် အောက်ပါမေးခွန်းများကို မေးကြည့်ပါ။

*   တစ်စုံတစ်ခု ပျောက်နေသည့် ပုံပေါက်သလား
*   အချက်အလက် များကို အဓိပ္ပါယ်ရှိရှိ တည်ဆောက်ထားသလား
*   အတန်း (row) တစ်ခုစီတွင် ဘာရှိသနည်း
*   ကော်လံ (column) တစ်ခုစီတွင် ဘာရှိသနည်း
*   ပေါင်းထားသည့် (merge လုပ်ထားသည့်) cell များရှိသလား

File ၏ ပထမတန်းတွင် variable များ၏ အမည်များပါဝင်သည်။ Dataset တွင်ပါဝင်သည့် variable (၆) မျိုးမှာ ‘ PS\_Code, PS\_Name, Region\_Name, District\_Name, Constituency\_Name, and Registered\_Voters တို့ ဖြစ်ကြသည်

[![Image 1](/images/academy/application-summarizing-the-polling-station-data/image1.png)](/images/academy/application-summarizing-the-polling-station-data/image1.png)

နောက်တစ်ဆင့်အနေဖြင့် dataset ထဲတွင် observation ဘယ်နှစ်ခုရှိသည်ကို ဖော်ထုတ်ကြပါစို့။ ယင်းသို့ဖော်ထုတ်ရန် အောက်ခြေသို့ scroll လုပ်ပြီး (၁) နှုတ်နိုင်သည် (variable အမည်များပါသည့် row များအတွက်)။

[![Image 2](/images/academy/application-summarizing-the-polling-station-data/image2.png)](/images/academy/application-summarizing-the-polling-station-data/image2.png)

သို့မဟုတ် column တစ်ခုကို highlight လုပ်ပြီး (ဥပမာ မှတ်ပုံတင်ထားသည့် မဲဆန္ဒရှင်များ (registered voters) ကဲ့သို့ variable တစ်ခု) ကွန်ပျူတာမျက်နှာပြင်၏ ညာဘက်အောက်နားတွင် “Numerical Count” ပြီးနောက် နံပါတ် အရေအတွက်ကို တွေ့မည်။ သင် တွေးဆထားသည့် အတိုင်းပင် “Numerical Count” သည် ကိန်းဂဏန်းများကိုသာ ရေတွက်ပြီး စာသားများကို လျစ်လျူရှုသည်။

[![Image 3](/images/academy/application-summarizing-the-polling-station-data/image3.png)](/images/academy/application-summarizing-the-polling-station-data/image3.png)

အကယ်၍ အကြောင်းအမျိုးမျိုးကြောင့် “Numerical Count” ကို အောက်ခြေ status bar တွင် ပါဝင်ရန် စာရင်းလုပ်မထားလျှင် ယင်း bar ပေါ်တွင် right click နှိပ်ပြီး “Numerical Count” ကို ဖော်ပြရန် statistic တစ်ခုအဖြစ်ရွေးပါ။

မှတ်ပုံတင်ထားသည့် မဲဆန္ဒရှင်များဆိုသည့် variable အတွက် observation ပေါင်း ၂၀,၉၂၈ ခုရှိသည်။ နောက်တစ်ဆင့် အနေဖြင့် မှတ်ပုံတင်ထားသည့်မဲဆန္ဒရှင်များ variable ကို လေ့လာကြည့်မည်။

### မျှော်မှန်းချက်များကို ဆန်းစစ်ခြင်း။ “မှတ်ပုံတင်ထားသည့် မဲဆန္ဒရှင်” variable

ကော်လံ F တွင် မဲရုံတစ်ခုချင်းစီအတွက် မှတ်ပုံတင်ထားသည့် မဲဆန္ဒရှင်အရေအတွက် နံပါတ် (အတန်းထဲတွင်) ပါရှိသည်။ မှတ်ပုံတင်ထားသည့် မဲဆန္ဒရှင် အရေအတွက် ကိန်းရှင်အား အနှစ်မချုပ်ခင် ကျွန်ုပ်တို့ တွေ့ရန်မျှော်လင့်သည့် အရာများကို ပြောကြည့်ကြပါစို့။ အောက်ပါမေးခွန်းများအား သင့်ကိုယ်သင် မေးကြည့်ပါ။

*   ဖြစ်နိုင်သည့် တန်ဖိုးများ အဖြစ် မည်သည်တို့ကို မျှော်လင့်ထားသနည်း။
*   ဗဟို သို့မဟုတ် ပျမ်းမျှက ဘာဖြစ်နိုင်သနည်း။
*   မဲရုံတစ်ခုအတွက် ဖြစ်နိုင်သည့် အနည်းဆုံး မဲပေးသူအရေအတွက်က ဘာဖြစ်နိုင်သနည်း။
*   သုညတန်ဖိုးရှိသည့် observation များတွေနိုင်သလား။ အနှုတ်တန်ဖိုးရှိသည့် ကိန်းဂဏန်း တစ်ခုခုတွေ့ရန် မျှော်လင့်သလား။
*   မဲရုံတစ်ခု၌ရှိနိုင်သည့် အများဆုံး မဲပေးသူအရေအတွက်က မည်မျှနည်း။
*   မည်သည့် တန်ဖိုး သို့မဟုတ် တန်ဖိုးများသည် ဖြစ်နိုင်ခြေနည်းသနည်း။ ဒသမကိန်းတစ်ခုခု (ဥပမာ ၁၂.၅) သည် ယုတ္တိရှိမည်လား။ မည်သည့်တန်ဖိုးသည် အထူးအဆန်းဖြစ်နေမည်နည်း။

### Excel ကို အသုံးပြု၍ “မှတ်ပုံတင်ထားသော မဲဆန္ဒရှင်” variable ကို ဖော်ပြခြင်း

Column F ရှိ "Registered\_Voters" (မှတ်ပုံတင်ထားသော မဲဆန္ဒရှင်) variable မှတ်သား (highlight) လိုက်ပါက Excel သည် ညာဘက်အောက်ရှိ status bar တွင် သူ့အလိုအလျောက် မှတ်သားထားသော cell အတွင်းရှိ အချို့သော တန်ဖိုးများကို တွက်ချက်ခြင်း၊ ပြသခြင်းများ ပြုလုပ်ပေးနိုင်သည်။

[![Image 4](/images/academy/application-summarizing-the-polling-station-data/image4.png)](/images/academy/application-summarizing-the-polling-station-data/image4.png)

၂၀၀၈ မဲရုံစာရင်းတွင် မဲရုံများတွင် မှတ်ပုံတင်ထားသော ပျမ်းမျှ မဲဆန္ဒရှင် ဦးရေမှာ ၅၄၇.၈ ဦး ဖြစ်ကြောင်း တွေ့နိုင်သည်။ အရေအတွက် ဖြည့်သွင်းထားသည့် cell အရေအတွက် စုစုပေါင်း (Count) မှာ ၂၀၉၂၉ ဖြစ်သည်ကိုလည်း တွေ့နိုင်သည်။ Excel သည် သတ်မှတ်ထားသော cell များထဲမှ အနိမ့်ဆုံး တန်ဖိုးက ၁ ဖြစ်ပြီး အမြင့်ဆုံး တန်ဖိုးက ၅၅၅၁၅ ဖြစ်သည်ကိုလည်း ပြသနိုင်သည်။ ပုံသေနည်း တစ်ခုချင်းစီ သုံး၍ ထိုတန်ဖိုးများကို တွက်ချက်ရန်လည်း Excel ကို အသုံးပြုနိုင်သည်။ သင့်အနေဖြင့် worksheet အသစ်တစ်ခု ဖန်တီးကာ [average](https://support.office.com/en-nz/article/AVERAGE-function-08cc8ca2-0177-42f8-8750-a1e9ae9637a2)၊ [minimum](https://support.office.com/en-in/article/MIN-function-6a4b0dd8-7853-474e-bf22-6014a60cfbd1)၊ [maximum](https://support.office.com/en-za/article/MAX-function-af0b7276-3817-4dbd-a0a4-ec915397dc7a)၊ [count](https://support.office.com/en-us/article/COUNT-function-47858132-8828-4041-8c5b-a5fb729bab6f) နှင့် standard deviation function များကို အသုံးပြု တွက်ချက် နိုင်သည်။ standard deviation သည် အောက်ရှိ status bar တွင် ဖော်ပြနိုင်သည့် အချက်မဟုတ်ဘဲ ပုံသေနည်း ထည့်၍ သီးသန့် တွက်ချက်ရမည် ဖြစ်သည်။

### သို့မဟုတ် Analysis Toolpak ကို အသုံးပြုကာ Excel ကို စာရင်းအင်းတွက်ချက်မှုများ အားလုံး ခိုင်းနိုင်သည်။

သင့်အနေဖြင့် Analysis Toolpak သွင်းထားပါက Data tab ကို သွားလျှင် “Data Analysis” ဟူသည်ကို ညာဘက် အဆုံးတွင် တွေ့နိုင်မည် ဖြစ်သည်။

[![Image 5](/images/academy/application-summarizing-the-polling-station-data/image5.png)](/images/academy/application-summarizing-the-polling-station-data/image5.png)

ထို menu မှ “Data Analysis” ကို နှိပ်ပါ။ Window အသစ်တစ်ခု ကျလာပါလိမ့်မည်။

[![Image 6](/images/academy/application-summarizing-the-polling-station-data/image6.png)](/images/academy/application-summarizing-the-polling-station-data/image6.png)

စာရင်းထဲတွင် “Analysis Tools” အောက်မှ “Descriptive Statistics” ကို ရွေးပြီး “OK” နှိပ်ပါ။ နောက်ထပ် ရွေးချယ်စရာ အသစ်များ ပေါ်လာပါလိမ့်မည်။ ထို ရွေးချယ်စရာ menu ထဲမှ “Input Range” ညာဘက်ရှိ အကွက်လေးကို နှိပ်ပါ။

[![Image 7](/images/academy/application-summarizing-the-polling-station-data/image7.png)](/images/academy/application-summarizing-the-polling-station-data/image7.png)

ယခုသင် တွက်ချက်လိုသည့် အပိုင်းကို select မှတ်ပါ။ ကျွန်ုပ်တို့သည် Column F ရှိ စာရင်းသွင်းထားသော မဲဆန္ဒရှင်များ variable ကို စိတ်ဝင်စားနေကြသည်။ ထို့ကြောင့် column F အပေါ်မှ select မှတ်ခြင်းဖြင့် column တစ်ခုလုံးကို select မှတ်လိုက်ပါ

[![Image 8](/images/academy/application-summarizing-the-polling-station-data/image8.png)](/images/academy/application-summarizing-the-polling-station-data/image8.png)

ထို့နောက် input ညာဘက်ရှိ ခလုပ်ကို ပြန်နှိပ်လိုက်ပါ။ (![Input box](/images/academy/application-summarizing-the-polling-station-data/input_box.png)).

[![Image 9](/images/academy/application-summarizing-the-polling-station-data/image9.png)](/images/academy/application-summarizing-the-polling-station-data/image9.png)

ထိုသို့လုပ်လိုက်လျှင် သင့်ကို “Descriptive Statistics” window ဆီသို့ ပြန်ခေါ်လာပေးလိမ့်မည်။ ထို window တွင် “Lables in First Row” ဘေးရှိ checkbox တွင် အမှန်ခြစ် ကလစ်နှိပ်ပေးရန် မမေ့ပါနှင်။ ထို့နောက် “Summary Statistics” ဘေးရှိ checkbox တွင် ကလစ်နှိပ်လိုက်ပါ။ “New Worksheet Ply” ကို ရွေးချယ်ထားပါ။ ထို့မှသာ သင်တွက်ချက်လိုက်သော စာရင်းအင်းများကို စာရွက်အသစ်တွင် ဖော်ပြေပေး ပေလိမ့်မည်။ ထို့နောက် “OK” ကို ကလစ်နှိပ်ပါ။

[![Image 10](/images/academy/application-summarizing-the-polling-station-data/image10.png)](/images/academy/application-summarizing-the-polling-station-data/image10.png)

ယခုသင့်ကို စာရင်းသွင်းထားသော မဲဆန္ဒရှင်များနှင့် စပ်လျဉ်းပြီး အနှစ်ချုပ် စာရင်းအင်းများ အားလုံးကို စာရွက်အသစ်တွင် ပြပေးလိမ့်မည်။

[![Image 11](/images/academy/application-summarizing-the-polling-station-data/image11.png)](/images/academy/application-summarizing-the-polling-station-data/image11.png)

ပျမ်းမျှ (Average)၊ စံသွေဖည်ကိန်း (standard deviation) နှင့် range များကိုသင်သိပြီးနောက် မှတ်ပုံတင်ထားသည့် မဲဆန္ဒရှင် စာရင်းကို မည်သို့ သင်ဖော်ပြမည်နည်း။ ဖြန်ဖြူးမှု (distribution) သည် ကျဲသလား သို့မဟုတ် ပူးပူးကပ်ကပ် စုစည်းပူးကပ်၍ရှိသလား။

အမှန်တကယ်စာရင်းအင်းများနှင့် မျှော်မှန်းထားချက်များအား နှိုင်းယှဉ်ခြင်း
-----------------------------------------------------------------------

သင့်အနေဖြင့် မှတ်ပုံတင်ထားသော မဲဆန္ဒရှင်များစာရင်း ကိန်းရှင် (variable) အတွက် စာရင်းအင်းအနှစ်ချုပ် ရှိနေပြီ ဖြစ်သည့်အတွက် အောက်ပါမေးခွန်းများအား မည်ကဲ့သို့ဖြေဆိုမည်နည်း။ သင်မူလက မျှော်မှန်းထားသည်တို့နှင့် သင့်အဖြေများကို တိုက်ဆိုင်စစ်ဆေးကြည့်ပါ။

*   တစ်စုံတစ်ခုခုများ ပျောက်နေသလား
*   အချက်အလက်တွေ အဓိပ္ပါယ်ရှိရှိ တည်ဆောက်ထားသလား
*   အတန်းတစ်တန်းစီမှာ ဘာတွေရှိသလဲ
*   ကော်လံတစ်ခုစီမှာ ဘာတွေရှိသလဲ