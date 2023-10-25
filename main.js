async function main(params) {
    var msg = `The claim has been approved.`;
    if (params.id) {
        msg = `The claim id no:  ${params.id} has been approved.`
    }
    return {
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: `${msg}`
    }
}

module.exports.main = main;