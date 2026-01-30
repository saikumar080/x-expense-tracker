import React,{useState} from "react";
import {Card, Button, CardContent,Stack,Typography, Dialog,DialogTitle, DialogContent,TextField,  Slide, Snackbar,Alert} from '@mui/material';
import { useExpense } from "../../context/ExpenseContext";
// import ExpenseItem from "./ExpenseItem";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ExpenseList() {
    
    const {state,dispatch}=useExpense();
    const[showForm,setShowForm]=useState(false);
    const[income,setIncome]=useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    //handle add income form
    const inputRef=React.useRef(null);
    const handleAddIncomeForm=()=>{
        const amount=Number(income);
        if(isNaN(amount) || amount <=0){
            setSnackbarOpen(true);
            inputRef.current?.focus();
            return;
        }
        dispatch({
            type:"ADD_BALANCE",
            payload:amount,
        })
        setIncome("");
        setShowForm(false);
    }

    return(
    <>
        <Card className="card" sx={{height:180, width:'100%', maxWidth:350, borderRadius:3, padding:2, backgroundColor:'#9B9B9B', color:'#FFFFFF',fontFamily:'Ubuntu, sans-serif',fontWeight:'700', boxShadow:'0px 4px 10px rgba(0,0,0,0.1)', transition:'transform 0.3s ease ', cursor:"pointer", '&:hover':{transform:'scale(1.02)'}}}>
            <CardContent sx={{height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between',alignItems:'center'}}>
                <Stack spacing={2} alignItems={"center"}>
                    <Typography variant="h5" >
                        Expense: ₹ 
                        <Typography
                            component="span"
                            sx={{color:"#A4EB5D", fontWeight:"700", fontSize:32,ml:1}}
                        >
                            {state.balance}
                        </Typography>
                    </Typography>
                    <Button variant="contained" sx={{bgcolor:"#A4E63A","&:hover":{bgcolor:"#388E3C"},justifyContent:"center", alignItems:"center", gap:2    }} onClick={() => setShowForm(true)}>+ Add Income</Button>
                
                </Stack>
                
            
            </CardContent>
        </Card>
        <Dialog
            open={showForm}
            TransitionComponent={Transition}
            onClose={() => setShowForm(false)}
            fullWidth
            maxWidth="sm"
            disableEscapeKeyDown
            onEntered={()=>inputRef.current?.focus()}
        >
            <DialogTitle sx={{color:"#212121"}}>Add Balance</DialogTitle>
            <DialogContent>
                <Stack direction={"row"} spacing={1} mt={1} alignItems={"center"}>
                    <TextField 
                        label="Income Amount"
                        type="number"
                        fullWidth
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                        inputRef={inputRef}
                        onKeyDown={(e)=>e.key=== 'Enter' && handleAddIncomeForm()}
                        sx={{flex:1}}

                    />
                    
                    <Button onClick={handleAddIncomeForm} variant="contained" sx={{bgcolor:"#ffc107","&:hover":{bgcolor:"#ff9800"}}}>Add Balance</Button>
                    <Button onClick={() => setShowForm(false)} sx={{bgcolor:"#eeeeee","&:hover":{bgcolor:"#d84315"},color:"black"}}>Cancel</Button>
                </Stack>
            </DialogContent>
        </Dialog>
        {/* Snackbar for invalid input */}
        <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={() => setSnackbarOpen(false)}
            anchorOrigin={{vertical:"top",horizontal:"center"}}
        >
            <Alert onClose={() => setSnackbarOpen(false)} severity="error" sx={{ width: '100%' }}>
              Invalid amount! Enter a positive number.
            </Alert>

        </Snackbar>
    </>
        
    )
}