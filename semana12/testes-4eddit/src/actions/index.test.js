import { setAllPosts, setSelectedPostId, setPostDetails } from './post';

    describe(" teste actions de posts", () =>{
        test("teste apenas do tipo da action setAllPosts", ()=> {
            // Preparação
            const stringTeste = 'type da action' 
            
            // Execução
            const action = setAllPosts(stringTeste)

            // verificação
            expect(action.type).toEqual('SET_ALL_POSTS')
    });

        test("teste completo da action setAllPosts", () => {
            const arrayTeste = [ 
                {
                    comments: [],
                    votesCount: 1,
                    userVoteDirection: 0,
                    commentsNumber: 0,
                    id: "RlSFodD5KOz2F5DMVH8Z",
                    username: "Augusto",
                    createdAt: 1573757661459,
                    title: "NAO VAI SOBRAR UM.",
                    text: "EU QUERO PÓDER DELETAR POSTS"
                }
            ]

            const action = setAllPosts(arrayTeste)

            expect(action.type).toEqual("SET_ALL_POSTS")
            expect(action.payload).toEqual({"allPosts": arrayTeste})
    })


       test("teste do tipo da action setSelectedPostId", ()=> {
            // Preparação
            const stringTeste = 'type da action' 
            
            // Execução
            const action = setSelectedPostId(stringTeste)
    
            // verificação
            expect(action.type).toBe('SET_SELECTED_POST_ID')
     });

        test("teste do tipo da action setPostDetails", ()=> {
            // Preparação
            const stringTeste = 'type da action' 
            
            // Execução
            const action = setPostDetails(stringTeste)

            // verificação
            expect(action.type).toBe('SET_POST_DETAILS')
      });

});