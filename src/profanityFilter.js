import filter from "leo-profanity";

const profanityFilter = (input) => {
    const check = filter.check(input);
    return check
};

export default profanityFilter;