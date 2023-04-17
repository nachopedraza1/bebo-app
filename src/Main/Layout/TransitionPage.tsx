import { Container } from '@mui/material';
import { motion } from 'framer-motion';

export const TransitionPage: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {

    const animationConfiguration = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.40 }}
            onClick={() => window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth"
            })}
        >
            <Container>
                {children}
            </Container>
        </motion.div>
    )
}
