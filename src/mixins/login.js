import { useUserStore } from "@/stores/User";
import { mapState } from "pinia";

export default {
    computed: {
        ...mapState(useUserStore, ['getId','getPw'])
    }
}
