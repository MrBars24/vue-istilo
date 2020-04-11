<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            The framework is already converting into vue-components,<br/>
            Target month release will be on May 2nd week.
        </p>

        <h3>Developer Social Media</h3>

        <ul>
            <li>
                <a href="https://github.com/JaoAustero"
                    target="_blank"
                    rel="noopener">
                    Github
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/Jao-Austero-100399834835714"
                    target="_blank"
                    rel="noopener">
                    Facebook
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/jaoaustero"
                    target="_blank"
                    rel="noopener">
                    Instagram
                </a>
            </li>
            <li>
                <a href="https://twitter.com/jaoaustero"
                    target="_blank"
                    rel="noopener">
                    Twitter
                </a>
            </li>
            <li>
                <a href="https://www.behance.net/jeraldaustero"
                    target="_blank"
                    rel="noopener">
                    Behance
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    
    props: {
        msg: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42B983;
    }
</style>
