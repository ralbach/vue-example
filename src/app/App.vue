<template>
    <div class="list-div">
        <div id="title">The Vue List thing</div>
        <ol>
            <div v-if="todos.length > 0">
                <div v-bind:key="todo.id" v-for="todo in todos">
                    <todo  :todo="todo" />
                    <button @click="removeTodo(todo.id)" v-bind:key="todo.id">Delete!</button>
                </div>
            </div>
            <div v-else>
                <div id="noTodos">
                    Looks like you're all done.
                </div>
                <div id="noTodos">
                    Add todos using the button below!
                </div>
            </div>
        </ol>
        <div id="title">
        What do you want to add?
        <br />
            <div id="input">
                <input v-model="todoText">
                <button @click="addTodo" v-on:submit.prevent>Add Todo!</button>
            </div>
        </div>
    </div>
</template>

<script>
import todo from './todo.vue'

export default {
    name: "app",
    components: {todo},
    data: function() {
       return {
            todos: [{text: "Items", id: 0}, {text: "To", id: 1}, {text: "Do", id: 2}],
            todoText: "",
            hideCompleted: false,
       }
    },
    methods: {
        addTodo: function(todo) {
            this.todos.push({text: this.todoText, id: this.todos.length})
        },
        removeTodo: function(todoId) {
            for(let i = 0; i < this.todos.length; i++) {
                if(todoId == this.todos[i].id) {
                    this.todos.splice(i, 1)
                }
            }
        }
    },
    created: function() {console.log("created list component")}
};


</script>

<style scoped>

.list-div{
    background-color: lightGray;
    width: 50vw;
    color: white;
    align-content: center;
    margin: auto
}

#noTodos {
    font-size: 22px;
    line-height: 26px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
}
#title {
    display:flex;
    flex-direction: column;
    background-color: white;
    color: black;
    align-items: center;
    border: 1px solid black;
    border-radius: 3px;
    justify-content: space-evenly;
}

#input{
    display:flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}
</style>