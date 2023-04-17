import { TransitionPage } from '../Layout/TransitionPage';
import { LatestDesigns } from '../components';
import { AdvertisingServers } from '../../ui';

export const HomePage: React.FC = () => {

    return (
        <>
            <AdvertisingServers />
            <TransitionPage>
                <LatestDesigns />
            </TransitionPage >
        </>
    )
}
