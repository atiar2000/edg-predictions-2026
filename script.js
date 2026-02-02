const templates = [
    "Dear ${input}, Imagine a future where AI gently suggests the perfect wine pairing as customers walk past shelves –  – Merry Christmas and here's to leading that innovation! 🎄",
    "To ${input}: Soon, smart mirrors in stores will show customers how a bottle would look on their holiday table.  – Wishing you a visionary year ahead! 🚀",
    "${input}, Picture AI that predicts exactly which spirits will sell out during New Year's – no more overstock surprises.  – Happy holidays! 🥂",
    "Hey ${input}, Future tech: Virtual sommeliers on customers' phones, guiding them to hidden gems in our aisles.  – Cheers to your leadership! 🍷",
    "${input}: Imagine shelves that light up to guide customers to their favorite whiskey based on past visits.  – Merry Christmas! 🌟",
    "Wishing ${input} a future where AI helps create personalised gift baskets automatically – customers love it, staff save time.  – Joyful season! 🎁",
    "Dear ${input}, Soon, smart carts will suggest cocktail recipes using items already inside.  – May you pioneer this convenience! ❄️",
    "${input}: Picture data that predicts local taste trends months ahead – stocking the right craft beers before anyone asks.  – Happy holidays! 🍺",
    "To ${input}, Future innovation: Voice assistants at home that reorder favorite wines when bottles run low.  – Wishing you a groundbreaking year! 📱",
    "${input}, Imagine customers scanning a bottle and instantly seeing food pairing ideas on their phone.  – Merry Christmas! 🍽️",
    "Merry Christmas, ${input}! Soon, AI will help plan perfect store layouts that make shopping feel effortless and fun. 🛒",
    "${input}: Picture smart labels that change to show cocktail recipes or tasting notes when tapped.  – Innovation ahead! 🏷️",
    "Dear ${input}, Future: Gentle reminders to customers about responsible enjoyment, perfectly timed and personal.  – Holiday cheers! ☺️",
    "${input}, Imagine virtual tasting rooms where customers sample wines from home before buying.  – Wishing you lead this experience! 🥂",
    "To ${input}: Soon, AI will match customers with limited-edition bottles they will truly love.  – Happy holidays! 🎯",
    "${input}, Picture in-store screens showing live popularity of drinks across the city – helping customers discover what’s hot.  – Merry Christmas! 📊",
    "Hey ${input}, Future tech: Delivery drones knowing the perfect temperature for each wine en route.  – Visionary wishes! 🚁",
    "${input}: Imagine loyalty programs that surprise customers with free samples of drinks they’re about to fall in love with.  – Joyful season! 🎉",
    "Dear ${input}, Soon, smart fridges at home will suggest cocktails based on what’s inside and the occasion.  – Merry Christmas! 🍹",
    "${input}, Picture AI that helps staff instantly find the best non-alcoholic alternative for any customer request.  – Happy holidays! 🌱",
    "To ${input}: Future: Augmented reality labels letting customers see the vineyard story behind each bottle.  – Wishing you inspire this! 📍",
    "${input}, Imagine stores that adjust lighting and music based on the mood customers want for their evening.  – Merry Christmas! 💡",
    "Merry Christmas, ${input}! Soon, AI will predict busy hours perfectly – helping schedule staff just right every time. ⏰",
    "${input}: Picture customers receiving a 'drink memory' recap at year-end – their favorite bottles and moments.  – Warm wishes! 📸",
    "Dear ${input}, Future innovation: Smart coolers that suggest chilled drinks based on the weather outside.  – Holiday joy! ❄️",
    "${input}, Imagine AI creating custom cocktail menus for home parties based on guest preferences shared in advance.  – Cheers! 🥳",
    "To ${input}: Soon, virtual gift cards that include a personal video tasting note from our experts.  – Merry Christmas! 🎥",
    "${input}, Picture data helping us launch local limited editions that customers are already dreaming about.  – Happy holidays! 🆕",
    "Hey ${input}, Future: In-store robots gently guiding customers to rare finds without feeling pushy.  – Visionary season! 🤖",
    "${input}: Imagine AI that helps plan the perfect route through the store for quick or leisurely shopping.  – Merry Christmas! 🗺️",
    "Dear ${input}, Soon, smart packaging that tells customers when a bottle is at perfect drinking temperature.  – Innovation cheers! 🌡️",
    "${input}, Picture customers getting recipe ideas using bottles they already own at home.  –  – Wishing you lead this connection! 📲",
    "To ${input}: Future tech: AI-powered events matching customers with tastings they’ll truly enjoy.  –  – Happy holidays! 🥂",
    "${input}, Imagine stores that remember customer preferences and greet them with personalised shelf highlights.  –  – Merry Christmas! 👋",
    "Merry Christmas, ${input}! Soon, data will help reduce waste by predicting demand with amazing accuracy. 🌍",
    "${input}: Picture virtual shelves online showing exactly what’s in stock in their local store right now.  –  – Joyful wishes! 🖥️",
    "Dear ${input}, Future: AI suggesting the perfect drink for any occasion – birthday, quiet night, or celebration.  –  – Holiday magic! 🎂",
    "${input}, Imagine customers trying new drinks confidently with AI-generated 'taste previews' on their phones.  –  – Cheers! 👅",
    "To ${input}: Soon, smart checkout that suggests missing mixers for the spirits in the basket.  –  – Merry Christmas! 🛍️",
    "${input}, Picture in-store digital guides teaching cocktail-making steps as customers shop.  –  – Happy holidays! 📖",
    "Hey ${input}, Future innovation: AI helping create seasonal displays that customers can’t resist photographing. 📸",
    "${input}: Imagine loyalty rewards that feel truly personal – not points, but surprises customers love.  –  – Merry Christmas! 🎁",
    "Dear ${input}, Soon, data will predict which new brands will become customer favorites before launch.  –  – Visionary year! 🔮",
    "${input}, Picture customers receiving gentle suggestions for lower-alcohol options when they want them.  –  – Responsible joy! 🌿",
    "To ${input}: Future: Virtual cellar tours from customers’ phones while standing in our aisles.  –  – Happy holidays! 🏰",
    "${input}, Imagine AI helping staff give instant expert advice on food and drink pairings.  –  – Merry Christmas! 🍴",
    "Merry Christmas, ${input}! Soon, smart inventory that orders stock before we even notice it’s low. ⚡",
    "${input}: Picture customers designing their own custom spirit bundles online with smart suggestions.  –  – Creative cheers! ✏️",
    "Dear ${input}, Future tech: Mood-based drink recommendations – relaxing, energizing, or celebratory.  –  – Holiday warmth! 😊",
    "${input}, Imagine stores that feel like a personal liquor advisor is always nearby – but powered by AI.  –  – Merry Christmas! 🧑‍💼",
    "To ${input}: Soon, data will help create neighborhood-specific collections that feel made just for them.  –  – Local love! ❤️",
    "${input}, Picture customers getting a 'perfect party pack' suggestion based on guest count and tastes.  –  – Happy holidays! 🎉",
    "Hey ${input}, Future: Smart tasting stations letting customers sample safely before buying.  –  – Innovation ahead! 🧪",
    "${input}: Imagine AI turning purchase history into beautiful year-end drink journey stories.  –  – Merry Christmas! 📖",
    "Dear ${input}, Soon, delivery apps knowing the best time to arrive based on customer routines.  –  – Seamless wishes! 🚚",
    "${input}, Picture in-store screens showing live customer favorites across all our locations.  –  – Community cheers! 👥",
    "To ${input}: Future innovation: AI helping plan unforgettable in-store tasting events automatically.  –  – Merry Christmas! 🗓️",
    "${input}, Imagine customers discovering new drinks through fun, short quizzes on their phones.  –  – Playful holidays! ❓",
    "Merry Christmas, ${input}! Soon, smart promotions that feel like thoughtful gifts, not ads. 🎁",
    "${input}: Picture data helping us support local distilleries with perfect timing and placement.  –  – Community future! 🏭",
    "Dear ${input}, Future: Voice shopping that understands 'something like last time but lighter'.  –  – Easy joy! 🗣️",
    "${input}, Imagine customers seeing how a bottle fits their home bar setup using their phone camera.  –  – Visual cheers! 📷",
    "To ${input}: Soon, AI suggesting the best drink to bring to a friend’s dinner – never arrive empty-handed.  –  – Happy holidays! 🍾",
    "${input}, Picture stores that quietly guide responsible purchasing with caring suggestions.  –  – Merry Christmas! 🤝",
    "Hey ${input}, Future tech: Digital collectible labels for rare bottles – fun for customers, smart for us. 🏆",
    "${input}: Imagine AI creating weekly 'drink adventures' emails customers actually look forward to.  –  – Engaging wishes! ✉️",
    "Dear ${input}, Soon, smart sensors ensuring every bottle is stored at perfect temperature always.  –  – Quality future! 🌡️",
    "${input}, Picture customers getting instant gift-wrapping ideas and messages when buying presents.  –  – Thoughtful holidays! 🎀",
    "To ${input}: Future: AI helping train staff with quick, personalised tips during quiet moments.  –  – Growth cheers! 📚",
    "${input}, Imagine stores that celebrate customer milestones – first purchase anniversary surprises.  –  – Merry Christmas! 🥳",
    "Merry Christmas, ${input}! Soon, data will make every promotion feel perfectly timed and relevant. 🎯",
    "${input}: Picture virtual happy hours connecting customers with experts from anywhere.  –  – Connected joy! 🌐",
    "Dear ${input}, Future innovation: Smart recommendations for building the perfect home bar step by step.  –  – Guiding wishes! 🏠",
    "${input}, Imagine AI spotting when a customer might enjoy trying something new – gently and perfectly.  –  – Discovery ahead! 🔍",
    "To ${input}: Soon, in-store digital assistants answering any question instantly and accurately.  –  – Helpful holidays! 💬",
    "${input}, Picture customers receiving a seasonal drink calendar with ideas all year round.  –  – Merry Christmas! 🗓️",
    "Hey ${input}, Future: AI turning feedback into instant improvements customers notice and love.  –  – Listening cheers! 👂",
    "${input}: Imagine stores that feel warmer and more welcoming through smart design suggestions.  –  – Cozy future! 🔥",
    "Dear ${input}, Soon, data will help create exclusive customer experiences that feel magical.  –  – Enchanting wishes! ✨",
    "${input}, Picture customers discovering cocktail recipes using only bottles they already own.  –  – Clever holidays! 🔄",
    "To ${input}: Future tech: Smart budgeting tools helping customers plan purchases responsibly.  –  – Caring innovation! 💰",
    "${input}, Imagine AI suggesting drinks that match the music playlist customers are listening to.  –  – Fun synergy! 🎵",
    "Merry Christmas, ${input}! Soon, every shopping trip will feel personal and delightful. 😊",
    "${input}: Picture virtual wine cellars customers can browse from home, linked to our real stock.  –  – Seamless joy! 🖼️",
    "Dear ${input}, Future: Gentle nudges toward new local producers customers will adore. Supporting cheers! 🏡",
    "${input}, Imagine stores celebrating cultural holidays with perfect drink suggestions from around the world.  –  – Inclusive wishes! 🌏",
    "To ${input}: Soon, AI will make restocking feel effortless and always spot-on. Smooth operations! ✅",
    "${input}, Picture customers getting a 'taste evolution' report showing how their preferences have grown. –  –  Personal growth! 📈",
    "Hey ${input}, Future innovation: Smart gifting tools that always pick winners. Gift success! 🎯",
    "${input}: Imagine in-store experiences that feel like visiting a friend who knows exactly what you like. – v Warm holidays! 🤗",
    "Dear ${input}, Soon, data will help create moments customers remember and share. –  –  Memorable future! 📣",
    "${input}, Picture AI helping design beautiful, sustainable packaging customers love keeping.  –  – Green cheers! ♻️",
    "To ${input}: Future: Shopping journeys so smooth, customers leave happier every time.  –  – Merry Christmas! 😄",
    "${input}, Imagine a world where every customer feels like our favorite regular – thanks to thoughtful tech. –  –  Heartfelt wishes! ❤️"
];

 
function generateWish() {
    const inputValue = document.getElementById('input').value.trim() || 'Ati';
    const output = document.getElementById('output');

    //   message
    output.innerHTML = '<p>Predicting the future of EDG retail stores... 🔮</p>';
    output.classList.remove('hidden');

    //   delay
    setTimeout(() => {
        const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
        const wish = randomTemplate.replace(/\$\{input\}/g, inputValue);

        output.innerHTML = `
            <p>${wish}</p>
            <p><strong>Enjoy 2026!</strong> 🥂</p>
        `;
    }, 1500); 
} 

// button
document.querySelector('button').onclick = generateWish;

// Enter key 
document.getElementById('input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        generateWish();
    }
});


