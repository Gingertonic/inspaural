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

teresa = Quote.create(author: "Mother Teresa", text: "Love each other", imageUrl: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201508/teresa-647-x-404_082615124557.jpg", audioUrl: "/audioclips/MotherTeresa.m4a")
hawking = Quote.create(author: "Stephen Hawking", text: "Look up to the stars", imageUrl: "https://media-assets-05.thedrum.com/cache/images/thedrum-prod/s3-h_0--2x1--898.jpg", audioUrl: "/audioclips/StephenHawking.m4a")
maya = Quote.create(author: "Maya Angelou", text: "Believe", imageUrl: "https://www.biography.com/.image/t_share/MTQ3NjM5NTA5NjU4Mzc5NjUy/maya_angelou_photo_by_deborah_feingold_corbis_entertainment_getty_533084708.jpg", audioUrl: "/audioclips/MayaAngelou.mp3")
harry = Quote.create(author: "Prince Harry", text: "We have risen from pessimisim", imageUrl: "https://i.ytimg.com/vi/xBVgJyYRVJg/maxresdefault.jpg", audioUrl: "/audioclips/PrinceHarry.m4a")
mahatma = Quote.create(author: "Mahatma Gandhi", text: "There is an unmistakable", imageUrl: "https://kidengage.com/blog/wp-content/uploads/2018/09/4-indian-gandhi-paintings.preview.jpg", audioUrl: "/audioclips/MahatmaGandhi.m4a")
blank1 = Quote.create(author: "", text: "", audioUrl: "", imageUrl: loadingImage)
blank1 = Quote.create(author: "", text: "", audioUrl: "", imageUrl: loadingImage)
rosa = Quote.create(author: "Rosa Parks", text: "Stand up", imageUrl: "https://daniellemcguire.com/wp-content/uploads/2010/09/rosa-parks-84620846-E.jpeg", audioUrl: "/audioclips/RosaParks.m4a")
sheryl = Quote.create(author: "Sheryl Sandberg", text: "Resilience", imageUrl: "https://s3.amazonaws.com/one_org_international/international/media/international/2014/05/SSandberg-large.jpg", audioUrl: "/audioclips/SherylSandberg.m4a")
blank1 = Quote.create(author: "", text: "", audioUrl: "", imageUrl: loadingImage)
blank1 = Quote.create(author: "", text: "", audioUrl: "", imageUrl: loadingImage)
robin = Quote.create(author: "Robin Williams in Dead Poets Society", text: "Yes we can", imageUrl: "https://unaffiliatedcritic.com/wp-content/uploads/2018/01/Robin-Williams-in-Dead-Poets-Society.jpg", audioUrl: "/audioclips/RobinWilliamsDeadPoets.m4a")
# yes = Quote.create(author: "Barack Obama", text: "Yes we can", imageUrl: "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg", audioUrl: "http://soundbible.com/mp3/Obama State Of The Union 2010-SoundBible.com-1976559822.mp3")
will = Quote.create(author: "Will Smith in The Pursuit of Happyness", text: "If you want something", imageUrl: "http://www.wingclips.com/system/movie-clips/the-pursuit-of-happyness/internship-interview/images/the-pursuit-of-happyness-movie-clip-screenshot-internship-interview_large.jpg", audioUrl: "/audioclips/WillSmithPursuitOfHappyness.m4a")
# winston = Quote.create(author: "Winston Churchill", text: "Speech", imageUrl: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2MTg0NzQxMzg3/winston-churchill-9248164-1-402.jpg", audioUrl: "http://soundbible.com/mp3/Winston Churchill Nazi Speech-SoundBible.com-877765747.mp3")
rowling = Quote.create(author: "JK Rowling", text: "Failure", imageUrl: "https://fotografias.antena3.com/clipping/cmsimages02/2016/08/02/D568E171-BBB4-4B58-ABB5-F65D0A97C343/58.jpg", audioUrl: "/audioclips/JKRowling.m4a")
avi = Quote.create(author: "Avi", text: "Student for life", imageUrl: "https://flatiron-v3-production.imgix.net/avi-flombaum.jpg?h=240&w=240&facepad=2&fit=facearea&ixlib=imgixjs-3.3.0", audioUrl: "/audioclips/AviFlombaum.m4a")

Ambience.create(name: "Chill", imageUrl: "https://www.worcsu.com/asset/Event/6013/chill.jpg", audioUrl: "https://www.looperman.com/media/loops/1297038/looperman-l-1297038-0141300-loner-mocha-jones-chill-x-spacey-pad-chords.mp3")
Ambience.create(name: "Soul", imageUrl: "https://cdn.dribbble.com/users/44134/screenshots/914778/soul.jpg", audioUrl: "https://www.looperman.com/media/loops/2158587/looperman-l-2158587-0136724-gentle-soul-drums.mp3")
Ambience.create(name: "Party", imageUrl: "http://titan.titanfm.co.uk/wp-content/uploads/2018/04/party.png", audioUrl: "https://www.looperman.com/media/loops/1657895/looperman-l-1657895-0138631-bass-party-loop-2.mp3")
Ambience.create(name: "Drama", imageUrl: "http://africanleadership.co.uk/wp-content/uploads/2017/11/strength.jpg", audioUrl: "https://www.looperman.com/media/loops/2879189/looperman-l-2879189-0139015-piano-melody-cold-snow-strom-type.mp3")

soulInsp = Inspaural.create(user_id: 1, ambience_id: 2, name: "Soul Positivity", quote1_vol: 40, quote2_vol: 50, quote3_vol: 60, quote4_vol: 45, ambience_vol: 35)
loveInsp = Inspaural.create(user_id: 2, ambience_id: 1, name: "Inspa and Chill", quote1_vol: 50, quote2_vol: 20, quote3_vol: 40, quote4_vol: 37, ambience_vol: 43)

loveInsp.quotes << hawking
loveInsp.quotes << rosa
loveInsp.quotes << rowling
loveInsp.quotes << avi

soulInsp.quotes << robin
soulInsp.quotes << mahatma
soulInsp.quotes << maya
soulInsp.quotes << sheryl
