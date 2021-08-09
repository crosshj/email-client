const api = [
    'contacts',
    'filters',
    'foldersList',
    'foldersRead',
    'messages',
    'settings'
];

const fetchAPI = (apiName) => fetch(`./api/${apiName}.json`)
    .then(x => x.json());

const getNetwork = (apis) => Promise.all(apis.map(fetchAPI))
    .then(res => apis.reduce((accumulator, current, i) => {
        accumulator[current] = res[i];
        return accumulator;
    }, {}));

export default getNetwork;
