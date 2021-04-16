<template>
    <nav class="bg-gray-700">
        <ul class="flex flex-row justify-end">
            <li><router-link to="/">Register Employee</router-link></li>
            <li><router-link to="/EmployeeList">Employee List</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
    nav ul li {
        color: white;
        padding: 15px 30px;
    }
    nav ul li:hover {
        background-color: rgb(5, 150, 105);
    }
</style>