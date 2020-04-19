export default {
    methods:
    {
        /**
         * Emits the function that has been passed.
         */
        onClick(event)
        {
            this.$emit('click', event);
        },
    },
};
