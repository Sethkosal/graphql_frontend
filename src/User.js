import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

const QUERY_USERS = gql`
query {
  users {
    id
    name
    lastName
  }
}
`;

export function UserInfo() {

    // Polling: rovides near-real-time synchronization with your server
    // by causing a query to execute periodically at a specified interval
    const { data, loading } = useQuery(QUERY_USERS, { pollInterval: 500 });
    // should handle loading status
    if (loading) return <p>Loading...</p>;

    return data.users.map(({ id, name, lastName }) => (
        <div key={id}>
            <p>
                User - {id}: {name} {lastName}
            </p>
        </div>
    ));
}
