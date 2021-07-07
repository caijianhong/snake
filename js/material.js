const texts=[
	"陈老师，您辛苦了！感谢您的付出！",
	"不计辛勤一砚寒，桃熟流丹，李熟技残，种花容易树人难。幽谷飞香不一般，诗满人间，画满人间，英才济济笑开颜。",
	"您讲的课，是那样丰富多采，每一个章节都仿佛在我面前打开了一扇窗户，让我看到了一个斑斓的新世界……",
	"信念之火在校园里焚烧着愚昧和无知。岁月证实你的耕耘是神圣的。你拥有春天，拥有阳光，拥有花朵；在永恒的歌声中，成为果实！",
	"老师播撒希望的种子，把我们培育成一片树林。",
	"您工作在今朝，却建设着祖国的明天；您教学在课堂，成就却在祖国的四面八方。",
	"老师，如果把您比作蚌，那末学生便是蚌里的砂粒；您用爱去舐它，磨它，浸它，洗它……经年累月，砂粒便成了一颗颗珍珠，光彩熠熠。",
	"是老师渊博的知识，让同学们们感受文明与希望；是老师宽广的胸怀，让大家懂得宽容与忍让；是老师慈善的目光，让你们由懦弱变得坚强。当同学们遇到挫折灰心丧气时，是老师在你们心田播种希望；当你们取得成功一帆风顺时，是老师及时开出“骄兵必败”的良方。",
	"我爱我的校园，更爱我的老师。让我们一起对自己的老师说一声：“谢谢您，我们爱您！”让我们一起行动起来，各恩图报，冬天就不会再寒冷，黑夜就不会再漫长，幸福快乐就会时刻陪伴在你我的身边！",
	"温柔的春雨，就是老师对我们的抚爱。",
	"你晶莹，是人类灵魂的雕塑大师和巨匠；你诚挚，毫无自私之心地默默奉献青春，在讲坛上愿作一滴滋润参天大树根基的水珠；你无畏，历经磨难却依然顽强不息地开拓前进，为整个中华民族的振兴而奋斗；你奋进，站在时代的潮头之上，呼唤着一个灿烂的未来……",
	"用语言播种，用彩笔耕耘，用汗水浇灌，用心血滋润，这就是我们敬爱的老师崇高的劳动。",
	"让我们，在试场上，认真应试，仔细答题，牢守纪律；让我们，在教室里，把教室打扫得干干净净，给班级一个整洁的环境；让我们，在寝室里，把寝室布置得窗明几净，给室友一个舒适的环境；让我们，在校园的小径上，看到地上有纸屑果壳，能够毫不犹豫地将他们拾起来……我想这一切的一切正是老师对我们多年来不断教育的成果，也是一种感恩，同时也是我们对老师平时谆谆教导的一种最好的回报。",
	"老师，是我们成长道路上的引路人。我们要感恩老师，就像小草感恩那博大的土地一样。是他们用纯洁无私的奉献和付出，启迪着我们，一次次给予了我们慰藉和鼓励，让我们从懵懂的少年走到了现在，开始编织我们美丽的未来。",
	"传播知识，就是播种希望，播种幸福。老师，您就是这希望与幸福的播种人！",
	"如果没有您思想的滋润，怎么会绽开那么多美好的灵魂之花？啊，老师，人类灵魂的工程师，有谁不在将您赞扬！",
	"我要感恩您，用算不完的爱，数不完的辛勤，来浇灌这我的成长，滋润我的生命，唤出我努力奋斗的精神。无论怎样，我将感恩您，报答您，但，我的回报，只不过是滴水之于长河--远远不够。",
	"相见时难别亦难，东风无力百花残。春蚕到死丝方尽，蜡炬成灰泪始干。",
	"老师，您用人类最崇高的感情——爱，播种春天，播种理想，播种力量……",
	"是她，滋润着我们这些娇嫩的祖国之花。她是辛勤的园丁，哺育我们成长；她是温暖的烛光，照进我们心田；她是心灵的吸尘器，吸走我们心中的阴云。她就是最美丽，最伟大，最无私的园丁--老师。",
	"老师，是太阳底下最神圣的职业，老师哺育着太阳底下最美丽的花朵，为我们遮风挡雨，给了我们一片洋溢着爱的海洋，给了我们荡漾着芬芳的幸福生活。是的，我们应该感激他们。",
	"老师是人类灵魂的工程师；是培育祖国花朵的辛勤园丁；是使我们走向正确道路的指航标；是我们记忆最深刻的人……老师们把我们培养成祖国的栋梁，是多么辛苦呀，我们难道不应该报答他们吗？",
	"老师的言传身教，像春雨润物细无声。",
	"不论我遇到了什么，您都会与我一同面对。老师，在我的眼里您是神奇的。我发自内心地感谢您，“感恩您，我的老师，感恩您为我所做的一切！”",
	"老师是一片绿叶，乐于默默奉献。",
	"感恩老师，并不需要我们去做什么惊天动地的大事，它表现在日常的点点滴滴：课堂上，一道坚定的目光，一个轻轻的点头，你在专心地听课，这便是感恩；下课后，在走廊里看到老师，一抹淡淡的微笑，一声礼貌的“老师好”，也是感恩！用优异的成绩，用可骄的成功，用你一点一滴的进步来告诉老师，“老师，我能行”，更是对老师的感恩。",
	"绿叶的绿色象征着老师青春常在。",
	"啊，有了您，花园才这般艳丽，大地才充满春意！老师，快推开窗子看吧，这满园春色，这满园桃李，都在向您敬礼！",
	"老师是大树，为世界带来一片春色。",
	"当苗儿需要一杯水的时候，绝不送上一桶水；而当需要一桶水的时候，也绝不给予一杯水。适时，适量地给予，这是一个好园丁的技艺。我的老师，这也正是您的教育艺术。",
	"老师甘当绿叶，把我们当红花托起。",
	"同学们，当我们什么事都不懂时，我们步入了幼儿园，小学，中学，来到了指明我们去向的地方。在这里，老师教我们做人，给我们知识。在老师的培育下，我们学会了我们原来不懂的东西，明白了学习的目的，掌握了学习的方法，知道了人活着的真正意义，树立了远大的志向。",
	"东宫白庶子，南寺远禅师。何处遥相见，心无一事时。",
	"“春蚕到死丝方尽，蜡炬成灰泪始干。”这句诗形象生动地说明了老师那无私奉献的精神。是啊，夜间，是谁在灯光下批改作业？白天，是谁即使是感冒了却仍然坚持工作？老师每时每刻都在燃烧着自己，是老师为我们这些年幼的孩子撑起了一片蔚蓝的天空啊！",
	"诲尔谆谆，听我藐藐。",
	"感恩老师，给我顽强的翅膀，飞向那知识的海洋，让书伴我成长；感恩老师，给我指明人生的方向，走向那五彩斑斓的人生风景线，让灯点燃快乐的火种；感恩老师，给我无限的前途和光辉，使我的明天繁花似锦，让我走向光辉的未来。",
	"啊！老师，校园里有着你的骄傲和光荣。在你呕心沥血的浇灌下，有着太多的丰收季节。你忠贞不渝地守护这块园地，就像守护着你的阳光照在你的脸上，那是一片明朗的希望。",
	"你没有华丽的辞藻，去修饰心中那一份感恩。鲜花感恩雨露，因为雨露滋润它成长；苍鹰感恩长空，因为长空让它飞翔；高山感恩大地，因为大地让它高耸；我感恩我的老师，因为老师打开智慧的大门，让我在知识的海洋里遨游。在我的成长历程中，您浓浓的师爱一直伴随左右。",
	"老师，他是人类灵魂的工程师。我们要感恩老师，是他们孜孜不倦地教导着我们。他们的关爱和教诲使我们无时无刻不被爱所深深地围绕和滋润着，无时无刻不被爱温暖照射着。难道我们还不应该对老师深深地感恩吗？"
];	