export const user = {
    "id": 1,
    "avatarImage": "default.png",
    "firstName": "Ilya",
    "lastName": "Novak",
    "username": "Iluhaprog",
    "bio": "I'm programmer!",
    "email": "admin@admin.com",
    "password": "$2b$10$GMcPVbBGhNb3lL9/3EdTwuT1vJepY/z61j6eRy0ic2wu3eJ4yGYiC",
    "skills": "node, js, react",
    "confirmed": 0,
    "date": "2021-01-17T20:51:55.000Z",
    "roleId": 1
};

export const social = {
    "title": "github",
    "preview": "",
    "link": "test link",
}

export const tag = {
    "id": 1,
    "title": "React",
    "postId": 1,
};

export const role = {
    role: 'TEST_ROLE',
};

export const project = {
    preview: 'project_preview.png',
    title: 'Chat',
    description: 'Chat for people',
    projectLink: 'https://chat.com',
    githubLink: 'https://github.com', 
    userId: 1,
}

export const post = {
    title: 'My first project',
    description: 'I tell you about problems with wich i will face',
    preview: 'preview.png',
    text: 'bla bla bla',
    visible: false,
    dirname: 'my_first_project',
    userId: 1,
};

export const like = {
    postId: 1,
    userId: 1,
};

export const file = {
    name: 'image.jpg',
    path: 'test-post.jpg',
    directoryId: 1,
}

export const formData = new FormData();
formData.append('file', 'Filedata');

export const comment = {
    text: 'Cool post',
    postId: 1,
    userId: 1,
};