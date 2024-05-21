const quotes=["原神启动",
              "The greatest glory in living lies not in never falling, but in rising every time we fall. --Nelson Mandela",
              "吾日三省吾身，为人谋而不忠乎？与朋友交而不信乎？传不习乎？--曾子",
              "The way to get started is to quit talking and begin doing. --Walt Disney",
              "仰天大笑出门去，我辈岂是蓬蒿人。--李白",
              "Be yourself; everyone else is already taken. --Oscar Wilde",
              "少壮不努力，老大徒悲伤。--长歌行》",
              "The man who does not read books has no advantage over the one who cannot read them. — Mark Twain",
              "三人行，必有我师焉。--孔子",
              "The only way to do great work is to love what you do. --Steve Jobs",
              "时间就像海绵里的水，只要愿挤，总还是有的。--鲁迅",
              "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. --Martin Luther King Jr",
              "天行健，君子以自强不息。--周易·乾·象》",
              "你干嘛... --蔡徐坤",
              "Do one thing every day that scares you. --Eleanor Roosevelt",
              "会当凌绝顶，一览众山小。--杜甫",
              "Well done is better than well said. --Benjamin Franklin",
              "其实地上本没有路，走的人多了，也便成了路。--鲁迅",
              "The best and most beautiful things in the world cannot be seen or even touched --they must be felt with the heart. --Helen Keller",
              "傲不可长，欲不可纵，乐不可极，志不可满。--魏徵",
              "In the end, it's not the years in your life that count. It's the life in your years. --Abraham Lincoln",
              "所谓天才，只不过是把别人喝咖啡的功夫都用在工作上了。--鲁迅",
               "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking. --Steve Jobs",
              "人生得意须尽欢，莫使金樽空对月。--李白",
              "天生我材必有用，千金散尽还复来。--李白"];

var quote_index=Math.floor(Math.random() * quotes.length);

function next_quote(){
  quote_index+=1;
  if(quote_index>=quotes.length){
    quote_index=0;
  }
  const quote = quotes[quote_index];
  return quote;
}

function change_quote_text(){
  const quote=next_quote();
  document.getElementById("quote-text").innerHTML=quote;
}

change_quote_text()
