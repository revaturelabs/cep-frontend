// Written by Michael Worrell
import React from "react";
import Enzyme, { shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MySpiderGraph from "../Components/Batch/AssociateList/spidergraph/MySpiderGraph";
import MySpiderGraphPage from "../Components/Batch/AssociateList/spidergraph/MySpiderGraphPage";
import { Provider } from 'react-redux';
import Radar from "react-d3-radar";
import * as axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { withHooks, withoutHooks } from 'jest-react-hooks-shallow';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import store from '../redux/store/index';
import toJson from 'enzyme-to-json';
import { Container } from "@material-ui/core";

Enzyme.configure({ adapter: new Adapter() });

// const mockStore = configureMockStore([thunk]);

const scores = [
    { traineeId: "restOfBatch", assessmentType: "AWS", score: 50.35925947825114, week: 1, weight: 100 },
    { traineeId: "restOfBatch", assessmentType: "TypeScript", score: 46.58357172012329, week: 2, weight: 100 },
    { traineeId: "restOfBatch", assessmentType: "Hive", score: 47.818763224283856, week: 2, weight: 100 },
    { traineeId: "restOfBatch", assessmentType: "Java", score: 39.89302557309468, week: 3, weight: 100 },
    { traineeId: "restOfBatch", assessmentType: "Quarkus", score: 48.559701951344806, week: 3, weight: 100 },
    { traineeId: "restOfBatch", assessmentType: "Spring Cloud", score: 52.91025918324788, week: 4, weight: 100 },
    { traineeId: "restOfBatch", assessmentType: "Spring", score: 34.84263242085775, week: 4, weight: 100 },
    { traineeId: "restOfBatch", assessmentType: "C#", score: 60.48832778930664, week: 5, weight: 100 },
    { traineeId: "restOfBatch", assessmentType: "React", score: 46.925523122151695, week: 5, weight: 100 },
    { traineeId: "restOfBatch", assessmentType: "JS", score: 68.40554072062174, week: 5, weight: 100 },
    { traineeId: "restOfBatch", assessmentType: "Docker", score: 50.73086957931518, week: 6, weight: 100 },
    { traineeId: "restOfBatch", assessmentType: "Hibernate", score: 45.14079812367757, week: 6, weight: 100 },
    { traineeId: "restOfBatch", assessmentType: "Spring Boot", score: 52.687697410583496, week: 7, weight: 100 },
    { traineeId: "restOfBatch", assessmentType: "NoSQL", score: 56.1440157254537, week: 7, weight: 100 }
]
const wrapper = mount(<Provider store={store}><MySpiderGraph scores={scores} /></Provider>);

test('does the spidergraph get the props', () => {
    const props = wrapper.find(Radar).prop('data');
    expect(props).toEqual({ "sets": [{ "key": "me", "label": "My Scores", "values": { "AWS": 50.35925947825114, "C#": 60.48832778930664, "Docker": 50.73086957931518, "Hibernate": 45.14079812367757, "Hive": 47.818763224283856, "JS": 68.40554072062174, "Java": 39.89302557309468, "NoSQL": 56.1440157254537, "Quarkus": 48.559701951344806, "React": 46.925523122151695, "Spring": 34.84263242085775, "Spring Boot": 52.687697410583496, "Spring Cloud": 52.91025918324788, "TypeScript": 46.58357172012329 } }], "variables": [{ "key": "AWS", "label": "AWS" }, { "key": "TypeScript", "label": "TypeScript" }, { "key": "Hive", "label": "Hive" }, { "key": "Java", "label": "Java" }, { "key": "Quarkus", "label": "Quarkus" }, { "key": "Spring Cloud", "label": "Spring Cloud" }, { "key": "Spring", "label": "Spring" }, { "key": "C#", "label": "C#" }, { "key": "React", "label": "React" }, { "key": "JS", "label": "JS" }, { "key": "Docker", "label": "Docker" }, { "key": "Hibernate", "label": "Hibernate" }, { "key": "Spring Boot", "label": "Spring Boot" }, { "key": "NoSQL", "label": "NoSQL" }] });
});

const batchId = "TR-1001";
const associateEmail = "mock11.associatee298a9c4-9e50-49c5-986d-b834b9843a2c@mock.com";
const wrapper2 = mount(<Provider store={store}><MySpiderGraphPage batchId={batchId} associateEmail={associateEmail}></MySpiderGraphPage></Provider>);

test('does the spidergraphpage gets props', () => {
    const graph = wrapper2.find(MySpiderGraph);
    expect(graph).not.toBe(null);
});

// jest.mock("react-redux", () => ({
//     ...jest.requireActual("react-redux"),
//     useSelector: jest.fn()
// }));

test('SpiderGraphPage return', () => {
    const wrap = mount(<MySpiderGraphPage batchId={batchId} associateEmail={associateEmail}></MySpiderGraphPage>);
    //expect(wrapper2.text()).toBe('Data still loading... ');

    console.log("Instance: " + wrap.type());
})

<<<<<<< HEAD:src/__tests__/MySpiderGraph.test.js
// test('returns data when myspidergraphpage is called', done => {
//     withHooks(() => {
//         // const store = mockStore({ startup: { complete: false } });
//         // const wrapper3 = shallow(<Provider store={store}><MySpiderGraphPage batchId={batchId} associateEmail={associateEmail}></MySpiderGraphPage></Provider>);


//         var mock = new MockAdapter(axios);
//         const data = { response: true };
//         mock.onGet('http://localhost:9015/graph/associate/TR-1001/mock11.associatee298a9c4-9e50-49c5-986d-b834b9843a2c@mock.com').reply(200, data);
//         /* MySpiderGraphPage({ batchId, associateEmail }).then(response => {
//             expect(response).toEqual(data);
//             done();
//         }) */
//     })
// })
=======
/* test('returns data when myspidergraphpage is called', done => {
    withHooks(() => {
        // const store = mockStore({ startup: { complete: false } });
        // const wrapper3 = shallow(<Provider store={store}><MySpiderGraphPage batchId={batchId} associateEmail={associateEmail}></MySpiderGraphPage></Provider>);


        var mock = new MockAdapter(axios);
        const data = { response: true };
        mock.onGet('http://localhost:9015/graph/associate/TR-1001/mock11.associatee298a9c4-9e50-49c5-986d-b834b9843a2c@mock.com').reply(200, data);

        MySpiderGraphPage({ batchId, associateEmail }).then(response => {
            expect(response).toEqual(data);
            done();
        })
    })
}) */
>>>>>>> MichaelJest:src/__tests__/MySpiderGraph.test.jsx
