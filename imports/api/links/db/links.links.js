import {Links} from "../links";
import {Posts} from "../../posts/posts";

Links.addLinks({
    'posts': {
        collection: Posts,
        inversedBy: 'link',
        index: true,
    }
})