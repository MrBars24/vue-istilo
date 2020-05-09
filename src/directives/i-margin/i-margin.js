/**
 * A utility to add spacing between components
 * @displayName Margin
 */
export default {
    bind(el, binding)
    {
        const size = binding.value || null;

        if (binding.modifiers.remove)
        {
            if (binding.modifiers.top)
            {
                el.classList.add('i-margin-remove-top');
            }

            else if (binding.modifiers.left)
            {
                el.classList.add('i-margin-remove-left');
            }

            else if (binding.modifiers.bottom)
            {
                el.classList.add('i-margin-remove-bottom');
            }

            else if (binding.modifiers.right)
            {
                el.classList.add('i-margin-remove-right');
            }

            else
            {
                el.classList.add('i-margin-remove');
            }
        }

        else
        {
            if (binding.modifiers.top)
            {
                if (size)
                {
                    el.classList.add(`i-margin-${size}-top`);
                }
                else
                {
                    el.classList.add(`i-margin-top`);
                }
            }

            else if (binding.modifiers.left)
            {
                if (size)
                {
                    el.classList.add(`i-margin-${size}-left`);
                }
                else
                {
                    el.classList.add(`i-margin-left`);
                }
            }

            else if (binding.modifiers.bottom)
            {
                if (size)
                {
                    el.classList.add(`i-margin-${size}-bottom`);
                }
                else
                {
                    el.classList.add(`i-margin-bottom`);
                }
            }

            else if (binding.modifiers.right)
            {
                if (size)
                {
                    el.classList.add(`i-margin-${size}-right`);
                }
                else
                {
                    el.classList.add(`i-margin-right`);
                }
            }

            else
            {
                if (size)
                {
                    el.classList.add(`i-margin-${size}`);
                }
                else
                {
                    el.classList.add(`i-margin`);
                }
            }
        }
    },
};
