import axios, { AxiosError } from "axios";
import { CollectionQuery } from "../../../models/collection.model";
import { collectionQueryBuilder } from "@/lib/collection-builder/collection-query-builder";
import { ROOM_ENDPOINT } from "./room.endpoint";
export const getRooms = async (query: CollectionQuery) => {
  try {
    // Build the full URL with query params
    const url = `${ROOM_ENDPOINT.list}?${collectionQueryBuilder(query)}`;

    // Fetch data from the backend with a timeout (optional)
    const response = await axios.get(url, { timeout: 5000 });

    // Return the data from the response
    return response.data;
  } catch (error: unknown) {
    // Check if the error is an AxiosError to access additional info
    if (error instanceof AxiosError) {
      console.error("Error fetching rooms:", error.message);
      console.error("Status:", error.response?.status);
      console.error("Response data:", error.response?.data);
    } else {
      console.error("Unexpected error:", error);
    }

    // Re-throw the error for the caller to handle
    throw error;
  }
};
