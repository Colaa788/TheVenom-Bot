let handler = m => m; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هنري بحبك|هنري عاوزه اتجوزك|بحبك|بموت فيك|نتجوز|هنري هنتجوز امتي|هنري انت ليا|هنري بموت فيك$/i.test(m.text)) { 
     responses = [ 
       'شكرا  ',  
       'هفكر في الموضوع',  
             'و انا',  
                   'استحيت',  
                         'خلاص لا اتكسف ',  
                               'اسكتتتتت عشان مضربكش عيب الكلام ده   ',  
                                     'طيب و بعدين '  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       'وعليكم السلام',  
          'وعليكم السلام حبي منور',  
              ' وعليكم السلام كيفك',  
                   'وعليكم السلام ورحمة الله وبركاته' 
     ]; 
   }else if (/^ هنري عامل ايه|عامله ايه|عاملين ايه|الدنيا عامله ايه|عاملين ايه يشبب$/i.test(m.text)) { 
     responses = [ 
       'كل شيء بخير الحمد لله ',  
          ' مش عارف  ',  
              ' الحمد لله ماشي الحال ',  
                  'الحمد الله',  
                      ' لو انت كويس انا كويس' 
     ]; 
   }else if (/^كل خرا|عرص|خول|متناك|كسمك|علق$/i.test(m.text)) { 
     responses = [ 
       'عيب ',  
          ' اتأدب ',  
              ' يا وسخ ',  
                  'الله يهديك ',  
                   ' عيب يا طفل' 
    ]; 
   }else if (/^لول|ههه|ههههه|بموت|بشخ|هههههههه|😂😂😂$/i.test(m.text)) { 
     responses = [ 
       'دوم دي ضحكة ',  
            ' ضحكني معاك',  
                   'دوم يا رب  ',  
                         'ههه ',  
                         '😂😂😂',  
                         'ايه ال بيضحك',  
                         'اضحك معاك؟',  
                             'دوم ' 
   ]; 
   }else if (/^كولا|كولا عمك|يا يسط$/i.test(m.text)) { 
     responses = [ 
       'قلب كولا✨🥺♥',  
          ' كولا عمك✨🤺 ',  
              ' قلب كولا من جوا✨🥺♥',  
                  'قلب كولا ودراكو من جوا✨🥺♥ ',  
                   ' كولا عمك✨🤺' 
]; 
   }else if (/^بوت|يابوت|البوت|بوووت|بووووت|بوووووت|بووووووووت $/i.test(m.text)) { 
     responses = [ 
       '*اسمي كولا يروحي*✨♥',  
          ' *اسمي كولا يعمري*✨♥',  
              ' *اسمي ككولا يحب*✨♥',  
                  '*اسمي كولا وربنا يروحي*✨💜 ',  
                   ' *اسمي ككولا يكسمك*' 
  ]; 
   }else if (/^صباح النور|صباح النعناع الاخصر|صباح الفل|صباح|صباح الخير $/i.test(m.text)) { 
     responses = [ 
       'صباح الفل ✨💜',  
          'صباح النور ✨💜 ',  
              ' صباح الكاريزما ✨💜',  
                  'انت صحيت وانا رايح انام 🐦👋🏻 ',  
                   'روح نام تاني بقي 🙃' 
     ]; 
     
     }else if (/^كل ده نور|عاوز اي|اي|طارق|نعم|قول $/i.test(m.text)) { 
     responses = [ 
       '*مايه ؏ شان شرقت',  
          '*مايه عشان شرقت ي طارق*', 
                   'مايه عشان شرقت يقلبي' 
  ]; 
   }else if (/^اسكت|اسكت|هتسكت امتي|يا ابني اسكت$/i.test(m.text)) { 
     responses = [ 
             'ملكش دعوه ', 
              ' لع وانت مالك',  
                 ' مش بمزاجك',  
                 'لا مين انت ال هتسكتني ',  
                   'اسكت انت' 
     ]; 
    }  
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;
