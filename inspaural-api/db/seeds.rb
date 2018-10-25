# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
testImage = "https://www.alambassociates.com/wp-content/uploads/2016/10/maxresdefault.jpg"
loadingImage = "https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/4321112/580/386/m1/fpnw/wm0/paper_question_mark_logo_template-03-.png?1524123254&s=16fbcdc7bbae4cf8368e72fc77a04dbe"

User.create(name: "Beti", email: "thegingertonicstudios@gmail.com", password: "test", password_confirmation: "test")
User.create(name: "Aki", email: "al@gakovic.com", password: "password", password_confirmation: "password")

bridge = Quote.create(author: "James Brown", text: "Take it to the bridge", imageUrl: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTIwNjA4NjMzNzU0ODQ2NzMy/james-brown-9228350-1-402.jpg", audioUrl: "https://www.looperman.com/media/loops/159051/looperman-l-0159051-0127180-minor2go-my-3000th-loop-part-1.mp3")
yes = Quote.create(author: "Barack Obama", text: "Yes we can", imageUrl: "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg", audioUrl: "http://soundbible.com/mp3/Obama State Of The Union 2010-SoundBible.com-1976559822.mp3")
heart = Quote.create(author: "Celine Dion", text: "The heart does go on", imageUrl: "https://www.grammy.com/sites/com/files/celinedion-spotlight-585581910.png", audioUrl: "https://www.looperman.com/media/loops/134239/looperman-l-0134239-0076754-devodale-devodale-word-const-kit-alphabet.mp3")
frankly = Quote.create(author: "Clark", text: "Frankly my dear, I don't give a damn", imageUrl: "https://i.ytimg.com/vi/xLnTWxpTQt4/hqdefault.jpg", audioUrl: "https://www.looperman.com/media/loops/68799/looperman-l-0068799-0001716-bosonhavoc-die-die-die-die.mp3")
indy = Quote.create(author: "Indiana Jones", text: "Why'd it have to be snakes?", imageUrl: "https://vignette.wikia.nocookie.net/indianajones/images/8/8c/Cobra.jpg/revision/latest?cb=20100304033804", audioUrl: "https://www.looperman.com/media/loops/159051/looperman-l-0159051-0127180-minor2go-my-3000th-loop-part-1.mp3")
blank1 = Quote.create(author: "", text: "", audioUrl: "", imageUrl: loadingImage)
blank1 = Quote.create(author: "", text: "", audioUrl: "", imageUrl: loadingImage)
shake = Quote.create(author: "Taylor Swift", text: "Shake it off", imageUrl: "https://www.billboard.com/files/styles/article_main_image/public/media/taylor-swift-shake-it-off-video-2-2014-billboard-650.jpg", audioUrl: "https://www.looperman.com/media/loops/2659336/looperman-l-2659336-0125509-dzoh-hypeman.mp3")
hurts = Quote.create(author: "R.E.M", text: "Everybody hurts sometimes", imageUrl: "https://i.ytimg.com/vi/ry1mfhc6a1E/hqdefault.jpg", audioUrl: "https://www.looperman.com/media/loops/134239/looperman-l-0134239-0076754-devodale-devodale-word-const-kit-alphabet.mp3")
blank1 = Quote.create(author: "", text: "", audioUrl: "", imageUrl: loadingImage)
blank1 = Quote.create(author: "", text: "", audioUrl: "", imageUrl: loadingImage)
zelda = Quote.create(author: "Everyone", text: "Psst", imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg", audioUrl: "https://www.looperman.com/media/loops/68799/looperman-l-0068799-0001716-bosonhavoc-die-die-die-die.mp3")
winston = Quote.create(author: "Winston Churchill", text: "Speech", imageUrl: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2MTg0NzQxMzg3/winston-churchill-9248164-1-402.jpg", audioUrl: "http://soundbible.com/mp3/Winston Churchill Nazi Speech-SoundBible.com-877765747.mp3")
owl = Quote.create(author: "Javone", text: "It were a owl", imageUrl: "http://www.fortitudemagazine.co.uk/wp-content/uploads/2013/07/Phoneshop-midres-21-crop-1024x904.jpg", audioUrl: "https://www.looperman.com/media/loops/2659336/looperman-l-2659336-0125509-dzoh-hypeman.mp3")
free = Quote.create(author: "John Inman", text: "I'm free", imageUrl: "http://www.johninman.co.uk/images/head.gif", audioUrl: "https://www.looperman.com/media/loops/134239/looperman-l-0134239-0076754-devodale-devodale-word-const-kit-alphabet.mp3")
# avi = Quote.create(author: "Avi", text: "Student for life", imageUrl: "https://flatiron-v3-production.imgix.net/avi-flombaum.jpg?h=240&w=240&facepad=2&fit=facearea&ixlib=imgixjs-3.3.0", audioUrl: "https://www.looperman.com/media/loops/68799/looperman-l-0068799-0001716-bosonhavoc-die-die-die-die.mp3")

Ambience.create(name: "Chill", imageUrl: "https://www.worcsu.com/asset/Event/6013/chill.jpg", audioUrl: "https://www.looperman.com/media/loops/1297038/looperman-l-1297038-0141300-loner-mocha-jones-chill-x-spacey-pad-chords.mp3")
Ambience.create(name: "Soul", imageUrl: "https://cdn.dribbble.com/users/44134/screenshots/914778/soul.jpg", audioUrl: "https://www.looperman.com/media/loops/2158587/looperman-l-2158587-0136724-gentle-soul-drums.mp3")
Ambience.create(name: "Party", imageUrl: "http://titan.titanfm.co.uk/wp-content/uploads/2018/04/party.png", audioUrl: "https://www.looperman.com/media/loops/1657895/looperman-l-1657895-0138631-bass-party-loop-2.mp3")
Ambience.create(name: "Drama", imageUrl: "http://africanleadership.co.uk/wp-content/uploads/2017/11/strength.jpg", audioUrl: "https://www.looperman.com/media/loops/2879189/looperman-l-2879189-0139015-piano-melody-cold-snow-strom-type.mp3")

soulInsp = Inspaural.create(user_id: 1, ambience_id: 2, name: "Soul Positivity", quote1_vol: 40, quote2_vol: 50, quote3_vol: 60, quote4_vol: 45, ambience_vol: 35)
loveInsp = Inspaural.create(user_id: 2, ambience_id: 1, name: "Loving time", quote1_vol: 50, quote2_vol: 20, quote3_vol: 40, quote4_vol: 37, ambience_vol: 43)

loveInsp.quotes << heart
loveInsp.quotes << frankly
loveInsp.quotes << hurts
loveInsp.quotes << zelda

soulInsp.quotes << bridge
soulInsp.quotes << yes
soulInsp.quotes << shake
soulInsp.quotes << winston
