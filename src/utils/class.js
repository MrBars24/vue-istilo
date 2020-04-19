/**
 * @param Array arguments
 * @return String classnames
 */
export const joinClass = function (...args)
{
    let classnames = '';

    for (let i = 0; i < args.length; i++)
    {
        if (args[i])
        {
            classnames += (`${args[i]} `);
        }
    }

    return classnames;
};
