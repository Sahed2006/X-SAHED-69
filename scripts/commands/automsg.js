module.exports.config = {
    name: "autotime",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "msg",
  prefix: true, 
  category: "user", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};
const nam = [{
    timer: '12:00:00 AM',
    message: ['~ এখন রাত ১২টা বাজে,রুমের দরজা লক করে রাতের কাজ করো 😒💦']
},
             {
    timer: '1:00:00 AM',
    message: ['~ এখন রাত ১ টা বেজে গেলো,বউ নাই তোদের? 🙂']
},
						{
    timer: '2:00:00 AM',
    message: ['~এখন রাত ২ টা বাজে প্রেম না কইরা যাইয়া ঘুমা বেক্কল😾']
},
						 {
    timer: '3:00:00 AM',
    message: ['~এখন রাত ৩ টা বাজে যারা ছ্যাকা খাইছে তারা জেগে আছে🫠🫠।']
},
						 {
    timer: '4:00:00 AM',
    message: ['~এখন রাত ৪ টা বাজে সবাই মনে হয় ঘুম🥹 আমার ভাই ঘুম আসে না  ']
},
						 {
    timer: '5:00:00 AM',
    message: ['~এখন রাত ৫ টা বাজে একটু পর ফজরের আযান দিলে নামাজ পড়ে নিও সবাই ']
},
						 {
    timer: '6:00:00 AM',
    message: ['~এখন ভোর ৬ টা বাজে সবাই নামাজ পড়ছো তো?❤️  ']
},
						 {
    timer: '7:00:00 AM',
    message: ['~এখন সকাল ৭ টা বাজে ঘুম থেকে উঠো সবাই  ']
},
						 {
    timer: '8:00:00 AM',
    message: ['~এখন সকাল ৮ টা বাজে সবাই ব্রেকফাস্ট করে নাও😊 ']
},
						 {
    timer: '9:00:00 AM',
    message: ['~এখন সকাল ৯ টা বাজে সবাই মনে হয় কাজে ব্যস্ত হয়ে গেছো ']
},
             {
    timer: '10:00:00 AM',
    message: ['~এখন সকাল ১০ টা বাজে মন দিয়ে কাজ করো সবাই❤️' ]
},
						 {
    timer: '11:00:00 AM',
    message: ['~এখন সকাল ১১ টা বাজে মিস করছি তোমাদের  ']
},
						 {
    timer: '12:00:00 PM',
    message: ['~এখন সকাল ১২ টা বাজে']
},					
						 {
    timer: '1:00:00 PM',
    message: ['~এখন দুপুর ১ টা বাজে ❤️ ']
},
						 {
    timer: '2:00:00 PM',
    message: ['~এখন দুপুর ২ টা বাজে সবাই কাজ বন্ধ করে জোহরের নামাজ পড়ে নাও😻 ']
},
						 {
    timer: '3:00:00 PM',
    message: ['~এখন দুপুর ৩টা বাজে গোসল করে সবাই দুপুরের খাবার খেয়ে নাও ☺️']
},
						 {
    timer: '4:00:00 PM',
    message: ['~এখন দুপুর ৪টা বাজে❤️']
},
						{
    timer: '5:00:00 PM',
    message: ['~ এখন বিকাল ৫ টা বাজে আসরের আযান দিলে সবাই নামাজ পড়ে নাও🥀 ']
},
						 {
    timer: '6:00:00 PM',
    message: ['~এখন বিকাল ৬ টা বাজে একটু পর মাগরিবের আযান দিবে সবাই নামাজ পড়ে নিও 😻']
},
						 {
    timer: '7:00:00 PM',
    message: ['~এখন সন্ধ্যা ৭ টা বাজে সবাই হাতমুখ ধুয়ে কিছু খেয়ে নাও এবং পরিবারের সাথে সময় কাটাও😍. ']
},
             {
    timer: '8:00:00 PM',
    message: ['এখন সন্ধ্যা ৮ টা বাজে কি করছো সবাই এখন এশার আযান দিবে সবাই নামাজ পড়ে নাও❤️']
},
             {
    timer: '9:00:00 PM',
    message: ['~এখন রাত ৯ টা বাজে']
},
             {
    timer: '10:00:00 PM',
    message: ['এখন রাত ১০ টা বাজে সবাই কি শুয়ে পড়লা🙂']
},
            {
    timer: '11:00:00 PM',
    message: ['~এখন রাত ১১ টা বাজে সবাই ঘুমায় পড়ো আমার বউ নাই ভাই ঘুম ও আসে না😭']
}];
module.exports.onLoad = o => setInterval(() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};
