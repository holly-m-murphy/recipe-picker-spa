export function makeArray(blob, ind) {
    const newArr = [];
    let index, textToParse;

    index = blob.indexOf(ind);
    textToParse = blob

    while (index > -1) {
        newArr.push(textToParse.substring(0, index))
        textToParse = textToParse.substring(index + 1, textToParse.length);
        index = textToParse.indexOf(ind);
    }

    if (newArr.length === 0) {
        return { ok: false, reason: `There weren't any ${ind} found.` }
    }

    newArr.push(textToParse)
    return { ok: true, createdArray: newArr }

}