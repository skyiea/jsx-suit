export default function (type) {
    return function (status, payload = {}) {
        return { type, status, payload };
    };
}