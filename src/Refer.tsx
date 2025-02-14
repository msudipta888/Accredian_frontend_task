import { useEffect, useState } from 'react';
import { 
  Container, Typography, Button, Card, CardContent, Dialog, DialogTitle, DialogContent, 
  TextField, Select, MenuItem, IconButton, Stepper, Step, StepLabel, Box, Accordion, AccordionSummary, AccordionDetails 
} from '@mui/material';
import { Gift, Users, Sparkles, X, Sun, Moon, ChevronDown } from 'lucide-react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Refer = () => {
  const [showModal, setShowModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereedName: '',
    refereedEmail: '',
    course: '',
    message: ''
  });
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState<number | null>(null);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const faqData = [
    {
      question: 'Do I need prior Product Management and Project Management experience to enroll?',
      answer: 'No, the program is designed to be inclusive for all levels. All topics will be covered from the basics, making it suitable for individuals from any field.'
    },
    {
      question: 'What is the minimum system configuration required?',
      answer: 'A system with at least 4GB RAM, a stable internet connection, and a modern web browser is recommended for the best experience.'
    }
  ];

  const handleReferral = async () => {
    console.log('refer')
      try {
        const response = await axios.post("http://localhost:5000/api/post/referrals",{
          referrerName: formData.referrerName,
          referrerEmail: formData.referrerEmail ,
          referredName:formData.refereedName ,
          referredEmail: formData.refereedEmail,
          course: formData.course,
          message: formData.message
        })
        
        if (response.status===201) {
          setShow(true);
          console.log('ok')
          setShowModal(false);
          setFormStep(0);
        }else{
          console.log('no')
        }
      } catch (error) {
        console.error('Error submitting referral:', error);
      }  
  };
 
  useEffect(() => {
    let timer: any;
    if (show) {
      timer = setTimeout(() => {
        setMessage('Congratulations! You created your first referral successfully 🎉🎉');
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <div
      className='transition-colors duration-500'
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: darkMode ? '#121212' : '#f5f5f5',
        color: darkMode ? '#fff' : '#000',
        transition: 'background-color 0.5s ease, color 0.5s ease'
      }}
    >
      {message && (
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '10px 20px',
            backgroundColor: darkMode ? '#333' : '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            transition: 'opacity 0.5s ease'
          }}
        >
          <Typography variant="subtitle1" style={{ color: darkMode ? '#fff' : '#000' }}>
            {message}
          </Typography>
        </div>
      )}
      <Container maxWidth="lg" sx={{ textAlign: 'center', py: 8 }}>
        <Button
          onClick={() => setDarkMode(!darkMode)}
          sx={{
            position: 'absolute',
            top: 20,
            right: 60,
            transition: 'transform 0.3s',
            ':hover': { transform: 'scale(1.1)' },
            backgroundColor: darkMode ? '#424242' : '#e0e0e0'
          }}
        >
          {darkMode ? <Sun /> : <Moon />}
        </Button>

        {/* Hero Section */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#fff',
            padding: 4,
            borderRadius: 4,
            boxShadow: 3,
            transition: 'box-shadow 0.3s',
            ':hover': { boxShadow: 6 }
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '157px' }, height: '87px', margin: 'auto' }}>
            <img
              src="./money.png"
              alt="Money"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </Box>
          <Box sx={{ textAlign: 'left', maxWidth: { xs: '100%', sm: '50%' }, margin: 'auto' }}>
            <Typography variant="h3" fontWeight="bold">
              Let's Learn & Earn
            </Typography>
            <Typography variant="h5" sx={{ color: '#3f51b5', fontWeight: 'bold' }}>
              Get a chance to win up to Rs. 15,000
            </Typography>
            <Box
              className='flex flex-col sm:flex-row gap-3 h-[70px] items-center justify-center mt-3'
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  transition: 'transform 0.3s, background-color 0.3s',
                  ':hover': { transform: 'scale(1.05)' }
                }}
                onClick={() => setShowModal(true)}
              >
                Refer Now
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  transition: 'transform 0.3s, background-color 0.3s',
                  ':hover': { transform: 'scale(1.05)' }
                }}
                onClick={() => {
                  navigate('/showall');
                }}
              >
                Show All Referral
              </Button>
            </Box>
          </Box>
          <Box sx={{ width: { xs: '100%', sm: '157px' }, height: '87px', margin: 'auto' }}>
            <img
              src="./money.png"
              alt="Money"
              style={{ height: '70px', width: '60px', objectFit: 'contain' }}
            />
          </Box>
          <Box sx={{ margin: 'auto' }}>
            <img
              src="./refer.png"
              alt="Hero Image"
              style={{
                width: "514px",
                height: "425px",
                objectFit: 'cover',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </Box>
          <Box sx={{ width: { xs: '100%', sm: '157px' }, height: { xs: '100px', sm: '157px' }, margin: 'auto' }}>
            <img
              src="./money.png"
              alt="Money"
              style={{ height: "70px", width: "60px", objectFit: 'contain' }}
            />
          </Box>
        </Box>

        {/* How It Works Section */}
        <Typography variant="h4" sx={{ mt: 6, mb: 3 }}>
          <span style={{ font: "inherit" }}>How Do I </span>
          <span style={{ color: '#3f51b5', textDecoration: 'underline' }}>Refer?</span>
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: "40px",
            justifyContent: 'center'
          }}
        >
          {[
            {
              icon: <Users size={32} color="#f50057" />,
              title: 'Submit',
              description: 'Submit referrals easily via our website’s referral section.'
            },
            {
              icon: <Gift size={32} color="#3f51b5" />,
              title: 'Earn',
              description: 'Earn rewards once your referrals join an accredited program.'
            },
            {
              icon: <Sparkles size={32} color="#ff9800" />,
              title: 'Bonus',
              description: 'Referrer receives a bonus 30 days after program enrollment.'
            }
          ].map((step, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 250,
                textAlign: 'center',
                p: 3,
                boxShadow: 5,
                transition: 'transform 0.3s, box-shadow 0.3s',
                ':hover': { transform: 'translateY(-5px)', boxShadow: 8 }
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  {step.icon}
                </Box>
                <Typography variant="h6" fontWeight="bold">
                  {step.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {step.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Referral Modal */}
        <Dialog open={showModal} onClose={() => setShowModal(false)} maxWidth="sm" fullWidth>
          <DialogTitle>
            Refer a Friend
            <IconButton onClick={() => setShowModal(false)} sx={{ position: 'absolute', right: 8, top: 8 }}>
              <X />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Stepper activeStep={formStep} sx={{ my: 2 }}>
              {["Your Info", "Friend's Info", "Course Selection"].map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log('Form submitted:', formData);
                setShowModal(false);
                setFormStep(0);
              }}
            >
              {formStep === 0 && (
                <>
                  <TextField
                    label="Your Name"
                    fullWidth
                    margin="dense"
                    value={formData.referrerName}
                    onChange={(e) =>
                      setFormData({ ...formData, referrerName: e.target.value })
                    }
                  />
                  <TextField
                    label="Your Email"
                    fullWidth
                    margin="normal"
                    type="email"
                    value={formData.referrerEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, referrerEmail: e.target.value })
                    }
                  />
                </>
              )}
              {formStep === 1 && (
                <>
                  <TextField
                    label="Friend's Name"
                    fullWidth
                    margin="normal"
                    value={formData.refereedName}
                    onChange={(e) =>
                      setFormData({ ...formData, refereedName: e.target.value })
                    }
                  />
                  <TextField
                    label="Friend's Email"
                    fullWidth
                    margin="normal"
                    type="email"
                    value={formData.refereedEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, refereedEmail: e.target.value })
                    }
                  />
                </>
              )}
              {formStep === 2 && (
                <>
                  <Select
                    fullWidth
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    displayEmpty
                   margin='none'
                  >
                    <MenuItem value="">Select a Course</MenuItem>
                    <MenuItem value="web-dev">Web Development Pro</MenuItem>
                    <MenuItem value="data-science">Data Science Mastery</MenuItem>
                    <MenuItem value="ai-ml">AI & Machine Learning</MenuItem>
                  </Select>
                  <TextField
                    label="Message"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </>
              )}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                {formStep > 0 && (
                  <Button onClick={() => setFormStep(formStep - 1)} variant="outlined">
                    Back
                  </Button>
                )}
      {
        formStep!==2? <Button
        type='button'
        variant='contained'
        color='secondary'
        onClick={()=>{
          setFormStep(formStep+1)
        }}
        >
       Next </Button>: <Button
         type="button"
         variant="contained"
         color="secondary"
         onClick={handleReferral}
        >Send Referrel</Button>
      }
              </Box>
            </form>
          </DialogContent>
        </Dialog>

        {/* FAQ Section */}
        <Box sx={{ mt: 9 }} >
          <Typography variant="h4" fontWeight="bold">
            Frequently Asked <span style={{ color: '#3f51b5' }}>Questions</span>
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              mt: 4,
              justifyContent: 'center'
            }}
          >
            {/* Sidebar */}
            <Box
              sx={{
                minWidth: 200,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                mb: { xs: 2, sm: 0 }
              }}
            >
              {['Eligibility', 'How To Use?', 'Terms & Conditions'].map((item, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s, transform 0.3s',
                    ':hover': {
                      backgroundColor: darkMode ? '#424242' : '#e0e0e0',
                      transform: 'scale(1.05)'
                    }
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
            {/* FAQ List */}
            <Box sx={{ flex: 1, ml: { xs: 0, sm: 4 } }}>
              {faqData.map((faq, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === index}
                  onChange={() => setExpanded(expanded === index ? null : index)}
                  sx={{
                    transition: 'background-color 0.3s',
                    ':hover': {
                      backgroundColor: darkMode ? '#1e1e1e' : '#f9f9f9'
                    }
                  }}
                >
                  <AccordionSummary expandIcon={<ChevronDown />}>
                    <Typography sx={{ fontWeight: 'bold', color: expanded === index ? '#3f51b5' : 'inherit' }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Box>
        </Box>
        <br />
        <Footer />
      </Container>
    </div>
  );
};

export default Refer;
