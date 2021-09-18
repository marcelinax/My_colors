import moment from "moment";

const parseDate = (date: string): string => {
    console.log(moment(date).fromNow());
    return moment(date).fromNow();

};

export default parseDate;