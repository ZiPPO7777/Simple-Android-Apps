// App Data
const grammarData = {
    categories: [
        {
            id: 'tenses',
            title: 'English Tenses',
            icon: 'fas fa-clock',
            description: 'Learn all about present, past and future tenses',
            lessons: [
                {
                    title: 'Present Simple Tense',
                    content: 'The Present Simple tense is used to describe habits, unchanging situations, general truths, and fixed arrangements.',
                    examples: [
                        'I <strong>work</strong> in a bank.',
                        'She <strong>lives</strong> in New York.',
                        'The sun <strong>rises</strong> in the east.'
                    ]
                },
                {
                    title: 'Past Simple Tense',
                    content: 'The Past Simple tense is used to talk about completed actions in the past. Regular verbs end in -ed, while irregular verbs have special past forms.',
                    examples: [
                        'I <strong>visited</strong> my grandparents yesterday.',
                        'She <strong>ate</strong> breakfast at 8 AM.',
                        'They <strong>went</strong> to the beach last weekend.'
                    ]
                },
                {
                    title: 'Future Simple Tense',
                    content: 'The Future Simple tense is used to talk about actions that will happen in the future. We use "will" or "shall" with the base form of the verb.',
                    examples: [
                        'I <strong>will call</strong> you tomorrow.',
                        'She <strong>will graduate</strong> next year.',
                        'We <strong>shall meet</strong> at the usual place.'
                    ]
                }
            ]
        },
        {
            id: 'parts-of-speech',
            title: 'Parts of Speech',
            icon: 'fas fa-puzzle-piece',
            description: 'Understand nouns, verbs, adjectives and other parts of speech',
            lessons: [
                {
                    title: 'Nouns',
                    content: 'A noun is a word that names a person, place, thing, or idea. Nouns can be proper (specific names) or common (general names).',
                    examples: [
                        '<strong>London</strong> is a beautiful city. (proper noun)',
                        'The <strong>dog</strong> barked loudly. (common noun)',
                        '<strong>Happiness</strong> is important. (abstract noun)'
                    ]
                },
                {
                    title: 'Verbs',
                    content: 'A verb is a word that describes an action, occurrence, or state of being. Verbs are the most important part of a sentence.',
                    examples: [
                        'She <strong>runs</strong> every morning.',
                        'They <strong>are</strong> happy.',
                        'The flowers <strong>bloomed</strong> beautifully.'
                    ]
                },
                {
                    title: 'Adjectives',
                    content: 'An adjective is a word that describes or modifies a noun. Adjectives usually answer questions like "what kind?", "how many?", or "which one?".',
                    examples: [
                        'She has a <strong>beautiful</strong> voice.',
                        'I bought <strong>three</strong> apples.',
                        'The <strong>red</strong> car is mine.'
                    ]
                }
            ]
        },
        {
            id: 'sentence-structure',
            title: 'Sentence Structure',
            icon: 'fas fa-layer-group',
            description: 'Learn about sentence types, clauses and word order',
            lessons: [
                {
                    title: 'Simple Sentences',
                    content: 'A simple sentence contains one independent clause with a subject and a verb. It expresses a complete thought.',
                    examples: [
                        'The dog barked.',
                        'She ate an apple.',
                        'They went to the park.'
                    ]
                },
                {
                    title: 'Compound Sentences',
                    content: 'A compound sentence contains two or more independent clauses joined by a coordinating conjunction (and, but, or, so, yet, for, nor).',
                    examples: [
                        'I wanted to go, <strong>but</strong> it was raining.',
                        'She studied hard, <strong>so</strong> she passed the exam.',
                        'You can come with us, <strong>or</strong> you can stay here.'
                    ]
                },
                {
                    title: 'Complex Sentences',
                    content: 'A complex sentence contains one independent clause and at least one dependent clause. The clauses are joined by subordinating conjunctions.',
                    examples: [
                        '<strong>Although</strong> it was raining, we went for a walk.',
                        'I will call you <strong>when</strong> I arrive.',
                        'She didn\'t go to school <strong>because</strong> she was sick.'
                    ]
                }
            ]
        },
        {
            id: 'punctuation',
            title: 'Punctuation',
            icon: 'fas fa-comma',
            description: 'Master the use of commas, periods, apostrophes and more',
            lessons: [
                {
                    title: 'Commas',
                    content: 'Commas are used to separate items in a list, after introductory phrases, around non-essential information, and before coordinating conjunctions in compound sentences.',
                    examples: [
                        'I need to buy eggs, milk, bread, and cheese.',
                        '<strong>After the rain stopped</strong>, we went outside.',
                        'My brother, <strong>who lives in Chicago</strong>, is visiting us.'
                    ]
                },
                {
                    title: 'Apostrophes',
                    content: 'Apostrophes are used to show possession and in contractions. They indicate omitted letters in contractions and ownership in possessive forms.',
                    examples: [
                        '<strong>It\'s</strong> raining today. (contraction of "it is")',
                        'This is <strong>Sarah\'s</strong> book. (possessive)',
                        'The <strong>dogs\'</strong> toys are everywhere. (plural possessive)'
                    ]
                },
                {
                    title: 'Quotation Marks',
                    content: 'Quotation marks are used to indicate direct speech, titles of short works, and to highlight words used in special ways.',
                    examples: [
                        'She said, <strong>"I\'ll be there soon."</strong>',
                        'Have you read <strong>"The Raven"</strong> by Edgar Allan Poe?',
                        'The so-called <strong>"experts"</strong> were wrong.'
                    ]
                }
            ]
        },
        {
            id: 'common-mistakes',
            title: 'Common Mistakes',
            icon: 'fas fa-exclamation-triangle',
            description: 'Avoid frequent errors made by English learners',
            lessons: [
                {
                    title: 'Your vs. You\'re',
                    content: '"Your" is a possessive adjective, while "you\'re" is a contraction of "you are". This is one of the most common mistakes in English writing.',
                    examples: [
                        '<strong>Your</strong> book is on the table. (possession)',
                        '<strong>You\'re</strong> going to love this movie. (you are)',
                        'Is this <strong>your</strong> car? <strong>You\'re</strong> lucky to have it!'
                    ]
                },
                {
                    title: 'There, Their, They\'re',
                    content: '"There" refers to a place, "their" shows possession, and "they\'re" is a contraction of "they are". These homophones are often confused.',
                    examples: [
                        'The book is over <strong>there</strong>. (place)',
                        'That is <strong>their</strong> house. (possession)',
                        '<strong>They\'re</strong> coming to the party. (they are)'
                    ]
                },
                {
                    title: 'Its vs. It\'s',
                    content: '"Its" is a possessive pronoun, while "it\'s" is a contraction of "it is" or "it has". This is another very common mistake.',
                    examples: [
                        'The dog wagged <strong>its</strong> tail. (possession)',
                        '<strong>It\'s</strong> been raining all day. (it has)',
                        '<strong>It\'s</strong> a beautiful day! (it is)'
                    ]
                }
            ]
        }
    ],
    exercises: {
        mcq: [
            {
                question: 'Which sentence uses the Present Simple tense correctly?',
                options: [
                    'I am going to the store yesterday.',
                    'She goes to school every day.',
                    'They were eating dinner now.',
                    'We will visit the museum tomorrow.'
                ],
                answer: 1,
                explanation: 'The correct answer is "She goes to school every day." because it describes a habitual action in the present simple tense.'
            },
            {
                question: 'Identify the noun in the following sentence: "The quick brown fox jumps over the lazy dog."',
                options: [
                    'quick',
                    'jumps',
                    'fox',
                    'over'
                ],
                answer: 2,
                explanation: 'The nouns in the sentence are "fox" and "dog" (only "fox" is listed as an option).'
            },
            {
                question: 'Choose the correct punctuation for this sentence: "What time is it __"',
                options: [
                    '.',
                    ',',
                    '?',
                    '!'
                ],
                answer: 2,
                explanation: 'The sentence is a question, so it requires a question mark at the end.'
            },
            {
                question: 'Which of these is a compound sentence?',
                options: [
                    'I like apples.',
                    'Because I was tired, I went to bed early.',
                    'She opened the door and looked outside.',
                    'I wanted to go, but it was raining.'
                ],
                answer: 3,
                explanation: 'A compound sentence contains two independent clauses joined by a coordinating conjunction (in this case, "but").'
            },
            {
                question: 'Select the correct form: "This is ___ book."',
                options: [
                    'you\'re',
                    'your',
                    'yours',
                    'you'
                ],
                answer: 1,
                explanation: '"Your" is the possessive adjective needed here. "You\'re" means "you are", "yours" is a possessive pronoun, and "you" is a subject pronoun.'
            }
        ],
        fill: [
            {
                question: 'Complete the sentence with the correct verb form: She ___ (go) to school every day.',
                answer: 'goes',
                explanation: 'The correct form is "goes" because it\'s the third person singular present simple form of "go".'
            },
            {
                question: 'Fill in the blank with the appropriate pronoun: This is ___ book. (possessive)',
                answer: 'my',
                explanation: 'The possessive adjective "my" is needed to show ownership of the book.'
            },
            {
                question: 'Complete the sentence with the correct article: I saw ___ elephant at the zoo.',
                answer: 'an',
                explanation: 'We use "an" before words that start with a vowel sound, like "elephant".'
            },
            {
                question: 'Fill in the blank with the correct preposition: She is afraid ___ spiders.',
                answer: 'of',
                explanation: 'The correct preposition to use with "afraid" is "of".'
            },
            {
                question: 'Complete the sentence with the correct form of "to be": They ___ going to the party tonight.',
                answer: 'are',
                explanation: 'The subject "they" requires the plural form "are" of the verb "to be".'
            }
        ],
        correct: [
            {
                question: 'Identify and correct the error in this sentence: "She don\'t like coffee."',
                answer: 'She doesn\'t like coffee.',
                explanation: 'The error is in the verb form. With third person singular subjects (she), we use "doesn\'t" instead of "don\'t".'
            },
            {
                question: 'Identify and correct the error in this sentence: "Their going to the park later."',
                answer: 'They\'re going to the park later.',
                explanation: '"Their" is a possessive pronoun, but we need the contraction of "they are" which is "they\'re".'
            },
            {
                question: 'Identify and correct the error in this sentence: "I have went to the store yesterday."',
                answer: 'I went to the store yesterday.',
                explanation: 'The present perfect "have went" is incorrect. We should use the simple past "went" for a completed action in the past.'
            },
            {
                question: 'Identify and correct the error in this sentence: "This books is very interesting."',
                answer: 'This book is very interesting.',
                explanation: 'The demonstrative "this" should be followed by a singular noun, so "books" should be "book".'
            },
            {
                question: 'Identify and correct the error in this sentence: "She can to swim very well."',
                answer: 'She can swim very well.',
                explanation: 'After modal verbs like "can", we use the base form of the verb without "to".'
            }
        ]
    },
    irregularVerbs: [
        { base: 'be', past: 'was/were', pastParticiple: 'been' },
        { base: 'begin', past: 'began', pastParticiple: 'begun' },
        { base: 'break', past: 'broke', pastParticiple: 'broken' },
        { base: 'bring', past: 'brought', pastParticiple: 'brought' },
        { base: 'buy', past: 'bought', pastParticiple: 'bought' },
        { base: 'choose', past: 'chose', pastParticiple: 'chosen' },
        { base: 'come', past: 'came', pastParticiple: 'come' },
        { base: 'do', past: 'did', pastParticiple: 'done' },
        { base: 'drink', past: 'drank', pastParticiple: 'drunk' },
        { base: 'eat', past: 'ate', pastParticiple: 'eaten' },
        { base: 'fall', past: 'fell', pastParticiple: 'fallen' },
        { base: 'find', past: 'found', pastParticiple: 'found' },
        { base: 'fly', past: 'flew', pastParticiple: 'flown' },
        { base: 'forget', past: 'forgot', pastParticiple: 'forgotten' },
        { base: 'get', past: 'got', pastParticiple: 'gotten' },
        { base: 'give', past: 'gave', pastParticiple: 'given' },
        { base: 'go', past: 'went', pastParticiple: 'gone' },
        { base: 'have', past: 'had', pastParticiple: 'had' },
        { base: 'know', past: 'knew', pastParticiple: 'known' },
        { base: 'leave', past: 'left', pastParticiple: 'left' },
        { base: 'make', past: 'made', pastParticiple: 'made' },
        { base: 'meet', past: 'met', pastParticiple: 'met' },
        { base: 'pay', past: 'paid', pastParticiple: 'paid' },
        { base: 'read', past: 'read', pastParticiple: 'read' },
        { base: 'run', past: 'ran', pastParticiple: 'run' },
        { base: 'say', past: 'said', pastParticiple: 'said' },
        { base: 'see', past: 'saw', pastParticiple: 'seen' },
        { base: 'sing', past: 'sang', pastParticiple: 'sung' },
        { base: 'sleep', past: 'slept', pastParticiple: 'slept' },
        { base: 'speak', past: 'spoke', pastParticiple: 'spoken' },
        { base: 'take', past: 'took', pastParticiple: 'taken' },
        { base: 'teach', past: 'taught', pastParticiple: 'taught' },
        { base: 'think', past: 'thought', pastParticiple: 'thought' },
        { base: 'write', past: 'wrote', pastParticiple: 'written' }
    ],
    commonMistakes: [
        {
            mistake: 'Using "loose" instead of "lose"',
            explanation: '"Loose" means not tight, while "lose" means to misplace something or fail to win.',
            correct: 'I don\'t want to lose my keys.',
            incorrect: 'I don\'t want to loose my keys.'
        },
        {
            mistake: 'Using "could of" instead of "could have"',
            explanation: 'This mistake comes from mishearing the contraction "could\'ve". The correct form is "could have".',
            correct: 'I could have gone to the party.',
            incorrect: 'I could of gone to the party.'
        },
        {
            mistake: 'Using "then" instead of "than" in comparisons',
            explanation: '"Then" refers to time, while "than" is used in comparisons.',
            correct: 'She is taller than her brother.',
            incorrect: 'She is taller then her brother.'
        },
        {
            mistake: 'Using "effect" instead of "affect"',
            explanation: 'Generally, "affect" is a verb meaning to influence, while "effect" is a noun meaning result.',
            correct: 'The weather affects my mood. The effect was noticeable.',
            incorrect: 'The weather effects my mood. The affect was noticeable.'
        },
        {
            mistake: 'Using "me" instead of "I" in subject position',
            explanation: 'After forms of "to be", we use "I" not "me" in formal English.',
            correct: 'It is I who called you.',
            incorrect: 'It is me who called you.'
        }
    ]
};

// App State
let appState = {
    currentSection: 'lessons',
    currentCategory: null,
    currentLesson: null,
    currentExerciseType: null,
    currentExercise: null,
    exerciseProgress: {
        currentIndex: 0,
        score: 0,
        total: 0
    },
    userData: {
        score: 0,
        completedLessons: [],
        completedExercises: 0,
        activities: []
    },
    achievements: {
        'Grammar Novice': false,
        'Practice Makes Perfect': false,
        'Grammar Expert': false
    }
};

// DOM Elements
const sectionElements = {
    lessons: document.getElementById('lessons'),
    exercises: document.getElementById('exercises'),
    progress: document.getElementById('progress'),
    reference: document.getElementById('reference')
};

const navItems = document.querySelectorAll('.main-nav li');
const categoryContainer = document.getElementById('category-container');
const lessonContent = document.getElementById('lesson-content');
const lessonTitle = document.getElementById('lesson-title');
const lessonText = document.getElementById('lesson-text');
const lessonExamples = document.getElementById('lesson-examples');
const backToCategories = document.getElementById('back-to-categories');
const practiceBtn = document.getElementById('practice-btn');
const exerciseContainer = document.getElementById('exercise-container');
const exerciseQuestion = document.getElementById('exercise-question');
const exerciseOptions = document.getElementById('exercise-options');
const exerciseFeedback = document.getElementById('exercise-feedback');
const exerciseScore = document.getElementById('exercise-score');
const exerciseCount = document.getElementById('exercise-count');
const backToExercises = document.getElementById('back-to-exercises');
const submitAnswer = document.getElementById('submit-answer');
const nextQuestion = document.getElementById('next-question');
const exerciseCards = document.querySelectorAll('.exercise-card');
const referenceContent = document.getElementById('reference-content');
const referenceData = document.getElementById('reference-data');
const backToReference = document.getElementById('back-to-reference');
const referenceTools = document.querySelectorAll('.tool-card');
const userScoreElement = document.getElementById('user-score');
const totalScoreElement = document.getElementById('total-score');
const lessonsCompletedElement = document.getElementById('lessons-completed');
const exercisesDoneElement = document.getElementById('exercises-done');
const recentActivitiesElement = document.getElementById('recent-activities');
const achievementsContainer = document.getElementById('achievements-container');
const themeToggle = document.getElementById('theme-toggle');

// Initialize the app
function initApp() {
    // Load user data from localStorage
    const savedData = localStorage.getItem('grammarAppData');
    if (savedData) {
        appState.userData = JSON.parse(savedData);
        updateUserScore();
    }
    
    // Load theme preference
    const savedTheme = localStorage.getItem('grammarAppTheme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Set up event listeners
    setupEventListeners();
    
    // Load initial content
    loadCategories();
    updateProgressSection();
}

// Set up event listeners
function setupEventListeners() {
    // Navigation
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const section = item.getAttribute('data-section');
            switchSection(section);
        });
    });
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Lesson navigation
    backToCategories.addEventListener('click', () => {
        lessonContent.style.display = 'none';
        document.querySelector('.lesson-categories').style.display = 'block';
    });
    
    practiceBtn.addEventListener('click', startPractice);
    
    // Exercise navigation
    backToExercises.addEventListener('click', () => {
        exerciseContainer.style.display = 'none';
        document.querySelector('.exercise-types').style.display = 'flex';
    });
    
    submitAnswer.addEventListener('click', checkAnswer);
    nextQuestion.addEventListener('click', loadNextQuestion);
    
    // Exercise type selection
    exerciseCards.forEach(card => {
        card.addEventListener('click', () => {
            const exerciseType = card.getAttribute('data-type');
            startExercise(exerciseType);
        });
    });
    
    // Reference tools
    referenceTools.forEach(tool => {
        tool.addEventListener('click', () => {
            const toolId = tool.getAttribute('id');
            showReferenceTool(toolId);
        });
    });
    
    backToReference.addEventListener('click', () => {
        referenceContent.style.display = 'none';
        document.querySelector('.reference-tools').style.display = 'grid';
    });
}

// Switch between sections
function switchSection(section) {
    // Update active nav item
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === section) {
            item.classList.add('active');
        }
    });
    
    // Hide all sections
    Object.values(sectionElements).forEach(el => {
        el.classList.remove('active');
    });
    
    // Show selected section
    sectionElements[section].classList.add('active');
    
    // Update current section
    appState.currentSection = section;
    
    // Load specific content if needed
    if (section === 'progress') {
        updateProgressSection();
    }
}

// Load grammar categories
function loadCategories() {
    categoryContainer.innerHTML = '';
    
    grammarData.categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.innerHTML = `
            <i class="${category.icon}"></i>
            <h3>${category.title}</h3>
            <p>${category.description}</p>
        `;
        
        categoryCard.addEventListener('click', () => {
            showCategoryLessons(category);
        });
        
        categoryContainer.appendChild(categoryCard);
    });
}

// Show lessons for a specific category
function showCategoryLessons(category) {
    appState.currentCategory = category;
    
    document.querySelector('.lesson-categories').style.display = 'none';
    lessonContent.style.display = 'block';
    
    // Display first lesson by default
    showLesson(category.lessons[0]);
}

// Show a specific lesson
function showLesson(lesson) {
    appState.currentLesson = lesson;
    
    lessonTitle.textContent = lesson.title;
    lessonText.textContent = lesson.content;
    
    // Add examples
    lessonExamples.innerHTML = '';
    lesson.examples.forEach(example => {
        const exampleEl = document.createElement('p');
        exampleEl.innerHTML = example;
        lessonExamples.appendChild(exampleEl);
    });
    
    // Check if lesson is already completed
    practiceBtn.disabled = appState.userData.completedLessons.includes(lesson.title);
    practiceBtn.textContent = practiceBtn.disabled ? 'Lesson Completed' : 'Practice This Topic';
}

// Start practice for current lesson
function startPractice() {
    // Mark lesson as completed if not already
    if (!appState.userData.completedLessons.includes(appState.currentLesson.title)) {
        appState.userData.completedLessons.push(appState.currentLesson.title);
        appState.userData.score += 10;
        appState.userData.activities.unshift({
            type: 'lesson',
            title: `Completed lesson: ${appState.currentLesson.title}`,
            timestamp: new Date().toLocaleString()
        });
        updateUserScore();
        saveUserData();
    }
    
    // Go to exercises section
    switchSection('exercises');
}

// Start a specific exercise type
function startExercise(exerciseType) {
    appState.currentExerciseType = exerciseType;
    appState.currentExercise = null;
    appState.exerciseProgress = {
        currentIndex: 0,
        score: 0,
        total: grammarData.exercises[exerciseType].length
    };
    
    document.querySelector('.exercise-types').style.display = 'none';
    exerciseContainer.style.display = 'block';
    
    loadQuestion();
}

// Load the current question
function loadQuestion() {
    const exercises = grammarData.exercises[appState.currentExerciseType];
    appState.currentExercise = exercises[appState.exerciseProgress.currentIndex];
    
    exerciseQuestion.innerHTML = '';
    exerciseOptions.innerHTML = '';
    exerciseFeedback.style.display = 'none';
    nextQuestion.style.display = 'none';
    
    // Update progress display
    exerciseScore.textContent = `Score: ${appState.exerciseProgress.score}/${appState.exerciseProgress.total}`;
    exerciseCount.textContent = `Question ${appState.exerciseProgress.currentIndex + 1} of ${appState.exerciseProgress.total}`;
    
    // Load question based on type
    if (appState.currentExerciseType === 'mcq') {
        exerciseQuestion.textContent = appState.currentExercise.question;
        
        appState.currentExercise.options.forEach((option, index) => {
            const optionEl = document.createElement('div');
            optionEl.className = 'mcq-option';
            optionEl.textContent = option;
            optionEl.setAttribute('data-index', index);
            
            optionEl.addEventListener('click', function() {
                // Remove selected class from all options
                document.querySelectorAll('.mcq-option').forEach(el => {
                    el.classList.remove('selected');
                });
                
                // Add selected class to clicked option
                this.classList.add('selected');
            });
            
            exerciseOptions.appendChild(optionEl);
        });
    } 
    else if (appState.currentExerciseType === 'fill') {
        const questionParts = appState.currentExercise.question.split('___');
        exerciseQuestion.innerHTML = `
            <p>${questionParts[0]} <input type="text" class="fill-input" id="fill-answer"> ${questionParts[1]}</p>
        `;
    } 
    else if (appState.currentExerciseType === 'correct') {
        exerciseQuestion.innerHTML = `
            <p>Identify and correct the error in this sentence:</p>
            <div class="correct-sentence">"${appState.currentExercise.question}"</div>
            <p>Corrected sentence:</p>
            <input type="text" class="fill-input" id="correct-answer" placeholder="Type the corrected sentence here">
        `;
    }
}

// Check the user's answer
function checkAnswer() {
    let userAnswer, isCorrect;
    
    if (appState.currentExerciseType === 'mcq') {
        const selectedOption = document.querySelector('.mcq-option.selected');
        if (!selectedOption) {
            alert('Please select an answer!');
            return;
        }
        
        userAnswer = parseInt(selectedOption.getAttribute('data-index'));
        isCorrect = userAnswer === appState.currentExercise.answer;
    } 
    else if (appState.currentExerciseType === 'fill') {
        userAnswer = document.getElementById('fill-answer').value.trim().toLowerCase();
        isCorrect = userAnswer === appState.currentExercise.answer.toLowerCase();
    } 
    else if (appState.currentExerciseType === 'correct') {
        userAnswer = document.getElementById('correct-answer').value.trim();
        isCorrect = userAnswer.toLowerCase() === appState.currentExercise.answer.toLowerCase();
    }
    
    // Show feedback
    exerciseFeedback.style.display = 'block';
    exerciseFeedback.className = isCorrect ? 'feedback-correct' : 'feedback-incorrect';
    
    if (isCorrect) {
        exerciseFeedback.innerHTML = `
            <p><i class="fas fa-check-circle"></i> Correct!</p>
            <p>${appState.currentExercise.explanation}</p>
        `;
        appState.exerciseProgress.score++;
    } else {
        exerciseFeedback.innerHTML = `
            <p><i class="fas fa-times-circle"></i> Incorrect.</p>
            <p>${appState.currentExercise.explanation}</p>
            ${appState.currentExerciseType === 'mcq' ? 
                `<p>The correct answer is: <strong>${appState.currentExercise.options[appState.currentExercise.answer]}</strong></p>` : 
                `<p>The correct answer is: <strong>${appState.currentExercise.answer}</strong></p>`}
        `;
    }
    
    // Update score display
    exerciseScore.textContent = `Score: ${appState.exerciseProgress.score}/${appState.exerciseProgress.total}`;
    
    // Show next question button
    submitAnswer.style.display = 'none';
    nextQuestion.style.display = 'inline-block';
}

// Load the next question or finish exercise
function loadNextQuestion() {
    appState.exerciseProgress.currentIndex++;
    
    if (appState.exerciseProgress.currentIndex < appState.exerciseProgress.total) {
        loadQuestion();
        submitAnswer.style.display = 'inline-block';
    } else {
        finishExercise();
    }
}

// Finish the current exercise session
function finishExercise() {
    // Update user data
    appState.userData.score += appState.exerciseProgress.score * 5;
    appState.userData.completedExercises++;
    appState.userData.activities.unshift({
        type: 'exercise',
        title: `Completed ${appState.currentExerciseType} exercise (Score: ${appState.exerciseProgress.score}/${appState.exerciseProgress.total})`,
        timestamp: new Date().toLocaleString()
    });
    
    // Check achievements
    checkAchievements();
    
    // Save data
    updateUserScore();
    saveUserData();
    
    // Show completion message
    exerciseQuestion.innerHTML = `
        <h3>Exercise Complete!</h3>
        <p>Your score: ${appState.exerciseProgress.score}/${appState.exerciseProgress.total}</p>
        <p>You earned ${appState.exerciseProgress.score * 5} points.</p>
    `;
    exerciseOptions.innerHTML = '';
    exerciseFeedback.style.display = 'none';
    nextQuestion.style.display = 'none';
    
    // Show button to return to exercises
    const returnBtn = document.createElement('button');
    returnBtn.className = 'submit-btn';
    returnBtn.textContent = 'Return to Exercises';
    returnBtn.addEventListener('click', () => {
        exerciseContainer.style.display = 'none';
        document.querySelector('.exercise-types').style.display = 'flex';
    });
    exerciseOptions.appendChild(returnBtn);
}

// Show reference tool content
function showReferenceTool(toolId) {
    document.querySelector('.reference-tools').style.display = 'none';
    referenceContent.style.display = 'block';
    referenceData.innerHTML = '';
    
    if (toolId === 'verb-conjugator') {
        referenceData.innerHTML = `
            <h3>Verb Conjugator</h3>
            <p>Enter a verb to see its conjugations:</p>
            <input type="text" id="verb-input" placeholder="Enter a verb">
            <button id="conjugate-btn" class="submit-btn">Conjugate</button>
            <div id="conjugation-result" style="margin-top: 20px;"></div>
        `;
        
        document.getElementById('conjugate-btn').addEventListener('click', conjugateVerb);
    } 
    else if (toolId === 'irregular-verbs') {
        referenceData.innerHTML = `
            <h3>Irregular Verbs</h3>
            <p>List of common irregular verbs in English:</p>
            <table>
                <thead>
                    <tr>
                        <th>Base Form</th>
                        <th>Past Simple</th>
                        <th>Past Participle</th>
                    </tr>
                </thead>
                <tbody id="irregular-verbs-list">
                </tbody>
            </table>
        `;
        
        const tableBody = document.getElementById('irregular-verbs-list');
        grammarData.irregularVerbs.forEach(verb => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${verb.base}</td>
                <td>${verb.past}</td>
                <td>${verb.pastParticiple}</td>
            `;
            tableBody.appendChild(row);
        });
    } 
    else if (toolId === 'common-mistakes') {
        referenceData.innerHTML = `
            <h3>Common Mistakes</h3>
            <p>Here are some common mistakes English learners make:</p>
            <div id="mistakes-list"></div>
        `;
        
        const mistakesList = document.getElementById('mistakes-list');
        grammarData.commonMistakes.forEach(mistake => {
            const mistakeEl = document.createElement('div');
            mistakeEl.className = 'lesson-examples';
            mistakeEl.innerHTML = `
                <h4>${mistake.mistake}</h4>
                <p>${mistake.explanation}</p>
                <p><strong>Incorrect:</strong> ${mistake.incorrect}</p>
                <p><strong>Correct:</strong> ${mistake.correct}</p>
            `;
            mistakesList.appendChild(mistakeEl);
        });
    }
}

// Conjugate a verb (simple implementation)
function conjugateVerb() {
    const verb = document.getElementById('verb-input').value.trim().toLowerCase();
    const resultDiv = document.getElementById('conjugation-result');
    
    if (!verb) {
        resultDiv.innerHTML = '<p class="feedback-incorrect">Please enter a verb.</p>';
        return;
    }
    
    // Check if verb is irregular
    const irregularVerb = grammarData.irregularVerbs.find(v => v.base === verb);
    
    if (irregularVerb) {
        resultDiv.innerHTML = `
            <h4>Conjugation of "${verb}" (irregular verb)</h4>
            <table>
                <tr>
                    <th>Base Form</th>
                    <td>${irregularVerb.base}</td>
                </tr>
                <tr>
                    <th>Past Simple</th>
                    <td>${irregularVerb.past}</td>
                </tr>
                <tr>
                    <th>Past Participle</th>
                    <td>${irregularVerb.pastParticiple}</td>
                </tr>
                <tr>
                    <th>Present Simple (3rd person)</th>
                    <td>${verb === 'be' ? 'is' : verb.endsWith('y') ? 
                        verb.replace(/y$/, 'ies') : 
                        verb.endsWith('s') || verb.endsWith('sh') || verb.endsWith('ch') || verb.endsWith('x') || verb.endsWith('o') ? 
                        verb + 'es' : verb + 's'}</td>
                </tr>
                <tr>
                    <th>Present Participle</th>
                    <td>${verb.endsWith('e') ? verb.replace(/e$/, 'ing') : verb + 'ing'}</td>
                </tr>
            </table>
        `;
    } else {
        // Regular verb conjugation
        resultDiv.innerHTML = `
            <h4>Conjugation of "${verb}" (regular verb)</h4>
            <table>
                <tr>
                    <th>Base Form</th>
                    <td>${verb}</td>
                </tr>
                <tr>
                    <th>Past Simple</th>
                    <td>${verb.endsWith('e') ? verb + 'd' : verb + 'ed'}</td>
                </tr>
                <tr>
                    <th>Past Participle</th>
                    <td>${verb.endsWith('e') ? verb + 'd' : verb + 'ed'}</td>
                </tr>
                <tr>
                    <th>Present Simple (3rd person)</th>
                    <td>${verb.endsWith('y') ? 
                        verb.replace(/y$/, 'ies') : 
                        verb.endsWith('s') || verb.endsWith('sh') || verb.endsWith('ch') || verb.endsWith('x') || verb.endsWith('o') ? 
                        verb + 'es' : verb + 's'}</td>
                </tr>
                <tr>
                    <th>Present Participle</th>
                    <td>${verb.endsWith('e') ? verb.replace(/e$/, 'ing') : verb + 'ing'}</td>
                </tr>
            </table>
        `;
    }
}

// Update the progress section
function updateProgressSection() {
    totalScoreElement.textContent = appState.userData.score;
    lessonsCompletedElement.textContent = appState.userData.completedLessons.length;
    exercisesDoneElement.textContent = appState.userData.completedExercises;
    
    // Update recent activities
    recentActivitiesElement.innerHTML = '';
    
    if (appState.userData.activities.length === 0) {
        recentActivitiesElement.innerHTML = '<p class="no-activity">No recent activities yet</p>';
    } else {
        appState.userData.activities.slice(0, 5).forEach(activity => {
            const activityEl = document.createElement('div');
            activityEl.className = 'activity-item';
            activityEl.innerHTML = `
                <div>
                    <i class="fas ${activity.type === 'lesson' ? 'fa-graduation-cap' : 'fa-pencil-alt'}"></i>
                    ${activity.title}
                </div>
                <span>${activity.timestamp}</span>
            `;
            recentActivitiesElement.appendChild(activityEl);
        });
    }
    
    // Update achievements
    const achievementElements = achievementsContainer.querySelectorAll('.achievement');
    let index = 0;
    
    for (const achievement in appState.achievements) {
        const achievementEl = achievementElements[index];
        
        if (appState.achievements[achievement]) {
            achievementEl.classList.remove('locked');
            achievementEl.classList.add('unlocked');
            achievementEl.innerHTML = `<i class="fas fa-trophy"></i><p>${achievement}</p>`;
        } else {
            achievementEl.className = 'achievement locked';
            achievementEl.innerHTML = `<i class="fas fa-lock"></i><p>${achievement}</p>`;
        }
        
        index++;
    }
}

// Check and unlock achievements
function checkAchievements() {
    // Grammar Novice - Complete first lesson
    if (appState.userData.completedLessons.length >= 1 && !appState.achievements['Grammar Novice']) {
        appState.achievements['Grammar Novice'] = true;
        showAchievementNotification('Grammar Novice');
    }
    
    // Practice Makes Perfect - Complete 5 exercises
    if (appState.userData.completedExercises >= 5 && !appState.achievements['Practice Makes Perfect']) {
        appState.achievements['Practice Makes Perfect'] = true;
        showAchievementNotification('Practice Makes Perfect');
    }
    
    // Grammar Expert - Earn 100 points
    if (appState.userData.score >= 100 && !appState.achievements['Grammar Expert']) {
        appState.achievements['Grammar Expert'] = true;
        showAchievementNotification('Grammar Expert');
    }
}

// Show achievement notification
function showAchievementNotification(achievement) {
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <i class="fas fa-trophy"></i>
        <p>Achievement Unlocked: ${achievement}!</p>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

// Update user score display
function updateUserScore() {
    userScoreElement.textContent = `Score: ${appState.userData.score}`;
}

// Save user data to localStorage
function saveUserData() {
    localStorage.setItem('grammarAppData', JSON.stringify(appState.userData));
}

// Toggle between light and dark theme
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        html.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('grammarAppTheme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('grammarAppTheme', 'dark');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);