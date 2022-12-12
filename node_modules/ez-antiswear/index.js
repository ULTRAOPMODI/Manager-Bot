var data = require('./swear-data');

    /**
     * Filter constructor.
     * @constructor
      */
    function AntiSwear(locale) {
        if(!locale)
            locale = 'ar';
        this.list = data[locale];
    }
    
    /**
     * 
     * @param {*} words 
     * @param {*} text 
     * إزالة الهمزات/التشكيل
     */
    function clean_text (text){
    text = text.replace ("أ","ا")
        .replace ("إ","ا")
        .replace ("ٌ","")
        .replace ("ُ","")
        .replace ("ً","")
        .replace ("َ","")
        .replace ("ٍ","")
        .replace ("ْ","")
        .replace ("ّ","")
        .replace ("ة","ه")
        .replace ("ِ","");

        return text;
    }

    /**
     * Determine if a single word is profane or looks profane.
     * @param {string} word - String to evaluate for profanity.
     */
    AntiSwear.prototype.isProfaneLike = function (word) {
        var isProfane = false;
        word = clean_text(word);

        if (this.list.some(function(v) { return (word == v); })) {
            isProfane = true;
        } else {
            isProfane = false;
        }
        return isProfane;
    }   

    /**
     * Replace a word with placeHolder characters;
     * @param {string} string - String to replace.
     */
    AntiSwear.prototype.replaceWord = function (string) {
        return "*".repeat(string.length);
    };

    /**
     * Evaluate a string for profanity and return an edited version.
     * @param {string} string - Sentence to filter.
     */
    AntiSwear.prototype.clean = function (string) {
        return string.split(' ').map(function(word) {
            return this.isProfaneLike(word) ? this.replaceWord(word) : word;
        }.bind(this)).join(' ');
    };

    /**
     * countion a string for profanity and return the count.
     * @param {string} string - Sentence to filter.
     */
    AntiSwear.prototype.count = function (string) {
        var count = 0;
        string.split(' ').map(function(word) {
        if(this.isProfaneLike(word)) 
            count++;
        }.bind(this));
        return count;
    };

    /**
     * Check a string for profanity and return an Boolean.
     * @param {string} string - Sentence to filter.
     */
    AntiSwear.prototype.check = function (string) {
        var isProfane = false;
        string.split(' ').some(function(word) {
            if(this.isProfaneLike(word)) 
                {isProfane = true;
                return true;}
        }.bind(this));
        return isProfane;
    };
    
    /**
     * Check a string for profanity and return an percent number .
     * @param {string} string - Sentence to filter.
     */
    AntiSwear.prototype.percent = function (string) {
        var count = 0;
        string.split(' ').map(function(word) {
        if(this.isProfaneLike(word)) 
            count++;
        }.bind(this));
        var stringLength = string.split(' ').length;

        return count / stringLength *100;
    };

module.exports = AntiSwear;
