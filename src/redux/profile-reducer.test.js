import profileReducer, { addPostActionCreator } from "./profile-reducer";



  it( 'fuckfuckfuck', () => {
    let state = {
      posts: [
        { id: 1, message: "I love you", likesCount: 5 },
        { id: 2, message: "I hate you", likesCount: 8 },
        { id: 3, message: "I fuck you", likesCount: 13 },
        { id: 4, message: "I love you", likesCount: 0 },
        { id: 5, message: "I hate you", likesCount: 111 },
      ]
    }
    
    let action = addPostActionCreator('hello')

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(6)
    expect(newState.posts[5].message).toBe('hello')
})




