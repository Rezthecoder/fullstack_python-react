import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Radio,
    RadioGroup,
    Textarea,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { BASE_URL } from "../App";

const CreateUserModal = ({ setUsers }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        role: "",
        description: "",
        gender: "",
    });
    const toast = useToast();

    const handleCreateUser = async (e) => {
        e.preventDefault(); // prevent page refresh
        setIsLoading(true);
        try {
            const res = await fetch(BASE_URL + "/friends", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inputs),
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error);
            }

            toast({
                status: "success",
                title: "Yayy! 🎉",
                description: "Friend created successfully.",
                duration: 2000,
                position: "top-center",
            });
            onClose();

            // Update the users state in the parent component
            setUsers((prevUsers) => [...prevUsers, data]);

            // Clear inputs
            setInputs({
                name: "",
                role: "",
                description: "",
                gender: "",
            });
        } catch (error) {
            toast({
                status: "error",
                title: "An error occurred.",
                description: error.message,
                duration: 4000,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Button
                onClick={onOpen}
                borderRadius={25}
                color={"white"}
                bgColor={"#7b14e3"}
                _hover={{ bgColor: "#9d00ff" }}
                ml={1}
            >
                <BiAddToQueue size={20} />
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <form onSubmit={handleCreateUser}>
                    <ModalContent>
                        <ModalHeader> My new legend 🦁 </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <Flex alignItems={"center"} gap={4}>
                                <FormControl>
                                    <FormLabel>Full Name</FormLabel>
                                    <Input
                                        placeholder="Ram Bahadur"
                                        value={inputs.name}
                                        onChange={(e) =>
                                            setInputs({ ...inputs, name: e.target.value })
                                        }
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Role</FormLabel>
                                    <Input
                                        placeholder="Hacker"
                                        value={inputs.role}
                                        onChange={(e) =>
                                            setInputs({ ...inputs, role: e.target.value })
                                        }
                                    />
                                </FormControl>
                            </Flex>
                            <FormControl mt={4}>
                                <FormLabel>Description</FormLabel>
                                <Textarea
                                    resize={"none"}
                                    overflowY={"hidden"}
                                    placeholder="He's a software engineer who loves to code and build things."
                                    value={inputs.description}
                                    onChange={(e) =>
                                        setInputs({ ...inputs, description: e.target.value })
                                    }
                                />
                            </FormControl>
                            <RadioGroup mt={4}>
                                <Flex gap={5}>
                                    <Radio
                                        value="male"
                                        onChange={(e) =>
                                            setInputs({ ...inputs, gender: e.target.value })
                                        }
                                    >
                                        Male
                                    </Radio>
                                    <Radio
                                        value="female"
                                        onChange={(e) =>
                                            setInputs({ ...inputs, gender: e.target.value })
                                        }
                                    >
                                        Female
                                    </Radio>
                                </Flex>
                            </RadioGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                colorScheme="blue"
                                mr={3}
                                type="submit"
                                isLoading={isLoading}
                            >
                                Add
                            </Button>
                            <Button onClick={onClose} bgColor={"red"} color={"white"}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </form>
            </Modal>
        </>
    );
};

export default CreateUserModal;
