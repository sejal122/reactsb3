import React from 'react'
import './renderlist.css'
function RenderList() {
    let messages=['hello,how are u' , 'Are you joining?','Dinner at 8','When will u become free?']
    let comments=[{
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      },
      {
        "postId": 1,
        "id": 2,
        "name": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
      },
      {
        "postId": 1,
        "id": 3,
        "name": "odio adipisci rerum aut animi",
        "email": "Nikita@garfield.biz",
        "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
      },
      {
        "postId": 1,
        "id": 4,
        "name": "alias odio sit",
        "email": "Lew@alysha.tv",
        "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
      },
      {
        "postId": 1,
        "id": 5,
        "name": "vero eaque aliquid doloribus et culpa",
        "email": "Hayden@althea.biz",
        "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
      },
      {
        "postId": 2,
        "id": 6,
        "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
        "email": "Presley.Mueller@myrl.com",
        "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
      },]
    let todos=[
       
              {
                id: 1,
                todo: "Do something nice for someone I care about",
                completed: true,
                userId: 26
              },
              {
                id: 2,
                todo: "Do homework",
                completed: false,
                userId: 26
              },
              {
                id: 3,
                todo: "study for 3 hours",
                completed: true,
                userId: 26
              },
              {
                id: 4,
                todo: "take a trip ",
                completed: false,
                userId: 26
              },
              
    ]
    return (
        <div>
            <ul>
            {
                messages.map((msg)=>{
                    return  <div> <li className='msgsli' key={msg}>{msg}</li> </div>
                })
            }
</ul>
<hr/>
<h1>TODOS:</h1>
<ul>
{
                todos.map((todo)=>{
                    return  <li className={todo.completed?'completed':'pending'} key={todo.id}>{todo.todo}</li>
                })
            }

</ul>
            
               
                
            
         </div>
    )
}

export default RenderList
