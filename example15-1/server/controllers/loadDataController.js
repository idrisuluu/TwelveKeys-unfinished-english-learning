const {data} = require('../mongodb')
const Word = require('../models/dataModel');
const User = require('../models/userModel');

const loadDataController = async (req,res) => {



    const word = await Word.find({});
    res.send(word);
    /*data.map((key) => {
        const{english,turkish,definition,example} = key;
        if(english && turkish && definition && example){
            const word = new Word({
                english,
                turkish,
                definition,
                example
            }).save();
        }
    })
    res.send('ok')*/
}
const getKeywordController = async(req,res) => {
    
    try {
        const { keywords } = req.body; // Dışarıdan gelen ID'lerin bulunduğu array
        console.log(keywords);
        // Rastgele 12 kelime getirme işlemi
        const newWords = await Word.aggregate([
          { $match: { _id: { $nin: keywords } } }, // Verilen ID'ler hariç olanları eşleştir
          { $sample: { size: 12 } }, // Rastgele 12 veri seç
        ]);
    
        res.status(200).json({ newWords });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Bir hata oluştu, lütfen tekrar deneyin' });
      }
}

const getKeywordsUserController = async(req,res) => {
    try {
        const id = req.params.id;
        
        // Kullanıcıyı bulma işlemi
        const user = await User.findById(id);
    
        if (!user) {
          return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
        }
    
        // Kullanıcının keywords'lerinin içindeki ID'leri
        const keywordIds = user.keywords; // Örnek olarak kullanıcı modelindeki keywords alanı
    
        // Keywords içindeki ID'lerle Word modelini sorgulama
        const words = await Word.find({ _id: { $in: keywordIds } });
    
        return res.status(200).json({ words });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Bir hata oluştu, lütfen tekrar deneyin' });
      }
}
module.exports = {
    loadDataController,
    getKeywordController,
    getKeywordsUserController
}