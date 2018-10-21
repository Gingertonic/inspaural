# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
testImage = "https://www.alambassociates.com/wp-content/uploads/2016/10/maxresdefault.jpg"

User.create(name: "Beti", email: "thegingertonicstudios@gmail.com", password: "test", password_confirmation: "test")
User.create(name: "Aki", email: "al@gakovic.com", password: "password", password_confirmation: "password")

bridge = Quote.create(author: "James Brown", text: "Take it to the bridge", imageUrl: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTIwNjA4NjMzNzU0ODQ2NzMy/james-brown-9228350-1-402.jpg", audioUrl: "https://www.looperman.com/media/loops/159051/looperman-l-0159051-0127180-minor2go-my-3000th-loop-part-1.mp3")
yes = Quote.create(author: "Barack Obama", text: "Yes we can", imageUrl: "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg", audioUrl: "https://www.looperman.com/media/loops/2659336/looperman-l-2659336-0125509-dzoh-hypeman.mp3")
heart = Quote.create(author: "Celine Dion", text: "The heart does go on", imageUrl: "https://www.grammy.com/sites/com/files/celinedion-spotlight-585581910.png", audioUrl: "https://www.looperman.com/media/loops/134239/looperman-l-0134239-0076754-devodale-devodale-word-const-kit-alphabet.mp3")
frankly = Quote.create(author: "Clark", text: "Frankly my dear, I don't give a damn", imageUrl: "https://i.ytimg.com/vi/xLnTWxpTQt4/hqdefault.jpg", audioUrl: "https://www.looperman.com/media/loops/68799/looperman-l-0068799-0001716-bosonhavoc-die-die-die-die.mp3")
indy = Quote.create(author: "Indiana Jones", text: "Why'd it have to be snakes?", imageUrl: "https://vignette.wikia.nocookie.net/indianajones/images/8/8c/Cobra.jpg/revision/latest?cb=20100304033804", audioUrl: "https://www.looperman.com/media/loops/159051/looperman-l-0159051-0127180-minor2go-my-3000th-loop-part-1.mp3")
shake = Quote.create(author: "Taylor Swift", text: "Shake it off", imageUrl: "https://www.billboard.com/files/styles/article_main_image/public/media/taylor-swift-shake-it-off-video-2-2014-billboard-650.jpg", audioUrl: "https://www.looperman.com/media/loops/2659336/looperman-l-2659336-0125509-dzoh-hypeman.mp3")
hurts = Quote.create(author: "R.E.M", text: "Everybody hurts sometimes", imageUrl: "https://i.ytimg.com/vi/ry1mfhc6a1E/hqdefault.jpg", audioUrl: "https://www.looperman.com/media/loops/134239/looperman-l-0134239-0076754-devodale-devodale-word-const-kit-alphabet.mp3")
zelda = Quote.create(author: "Everyone", text: "Psst", imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg", audioUrl: "https://www.looperman.com/media/loops/68799/looperman-l-0068799-0001716-bosonhavoc-die-die-die-die.mp3")
oranges = Quote.create(author: "The Bells of St Clemens", text: "Oranges and Lemons", imageUrl: "https://lostcityoflondon.files.wordpress.com/2018/03/st-clements.jpg?w=374&h=527", audioUrl: "https://www.looperman.com/media/loops/159051/looperman-l-0159051-0127180-minor2go-my-3000th-loop-part-1.mp3")
owl = Quote.create(author: "Javone", text: "It were a owl", imageUrl: "http://www.fortitudemagazine.co.uk/wp-content/uploads/2013/07/Phoneshop-midres-21-crop-1024x904.jpg", audioUrl: "https://www.looperman.com/media/loops/2659336/looperman-l-2659336-0125509-dzoh-hypeman.mp3")
free = Quote.create(author: "John Inman", text: "I'm free", imageUrl: "http://www.johninman.co.uk/images/head.gif", audioUrl: "https://www.looperman.com/media/loops/134239/looperman-l-0134239-0076754-devodale-devodale-word-const-kit-alphabet.mp3")
avi = Quote.create(author: "Avi", text: "Student for life", imageUrl: "https://flatiron-v3-production.imgix.net/avi-flombaum.jpg?h=240&w=240&facepad=2&fit=facearea&ixlib=imgixjs-3.3.0", audioUrl: "https://www.looperman.com/media/loops/68799/looperman-l-0068799-0001716-bosonhavoc-die-die-die-die.mp3")

Ambience.create(name: "funk", audioUrl: "www.test.com/funk")
Ambience.create(name: "love", audioUrl: "www.test.com/love")

soulInsp = Inspaural.create(user_id: 1, ambience_id: 2, name: "Soul Positivity")
loveInsp = Inspaural.create(user_id: 2, ambience_id: 1, name: "Loving time")

loveInsp.quotes << heart
soulInsp.quotes << bridge
soulInsp.quotes << yes
