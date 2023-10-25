async function main(params) {
    var msg = `Processing approval for the claim is complete.`;
    if (params.id) {
        msg = `Processing approval for claim: ${params.id} is complete.`
    }
    return {
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: `${msg}`
    }
}

module.exports.main = main;