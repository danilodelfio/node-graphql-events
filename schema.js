const axios = require('axios');

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

// people type
const PeopleType = new GraphQLObjectType({
    name: 'People',
    fields: () => ({
        id: {type:GraphQLString},
        name: {type:GraphQLString},
        age: {type: GraphQLInt}
    })
})

// location type
const LocationType = new GraphQLObjectType({
    name: 'Location',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type:GraphQLString},
        latitude: {type:GraphQLString},
        longitude: {type:GraphQLString}
    })
})

// event type
const EventType = new GraphQLObjectType({
    name: 'Event',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        date: {type: GraphQLString},
        location : {type: LocationType},
        organizer: {type:PeopleType},
        attendees: {type: new GraphQLList(PeopleType)}
    })
})

// root query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        event: {
            type: EventType,
            args: {
                id: {type: GraphQLString}
            },
            resolve(parentValue, args) {
                return axios.get('http://localhost:3000/events/'+args.id)
                    .then(res => res.data);
            }
        },
        events: {
            type: new GraphQLList(EventType),
            resolve(parentValue) {
                return axios.get('http://localhost:3000/events')
                .then(res => res.data);
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});