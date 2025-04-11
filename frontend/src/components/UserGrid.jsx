import { Flex, Grid, Spinner } from "@chakra-ui/react";
import UserCard from "./UserCard";
import { useEffect, useState } from "react";
import { BASE_URL } from "../App";


function UserGrid({ users, setUsers }) {

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true)
            try {
                const res = await fetch(BASE_URL + "/friends")
                const data = await res.json()
                if (!res.ok) {
                    throw new Error(data.error)
                }
                setUsers(data)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchUsers()
    }, [setUsers])
    return <>
        {isLoading ? (
            <Flex justifyContent={"center"}>
                <Spinner size={"xl"} />
            </Flex>
        ) : (
            <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={6}>
                {/* Map through the USERS array and render a UserCard for each user */}
                {users.map((user) => (
                    <UserCard key={user.id} user={user} setUsers={setUsers} />
                ))}
            </Grid>
        )}

    </>
}

export default UserGrid;
