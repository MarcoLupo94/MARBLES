import { getHabits, createHabit, getHabitsByDate, filterHabits, delHabits, completeHabit } from '../models/habitFunctions'

const USER_ID = 1;
// TODO refactor in controller and model different files && refactor to real db search
// TODO CHECK RETURN STATUSES

const saveHabits = async (req: any, res: any) => {
  const habit = req.body.habit;
  const habitWithUser = { habit, UserId: USER_ID, completed: [] };
  try {
    const countHabits = await getHabits(USER_ID);
    if (countHabits.length < 5) {
      const createdHabit = await createHabit(habitWithUser);
      res.status(201);
      res.send(createdHabit);
    } else {
      res.status(200)
      res.send('Too many habits');
    }
  } catch (error) {
    res.status(500);
    console.log('error in saveHabits: ', error);
  }
};

const showHabits = async (req: any, res: any) => {
  try {
    const findHabits = await getHabitsByDate(USER_ID, req.body.selectedDate)
    new Date(req.body.selectedDate);
    const filteredHabits = await filterHabits(findHabits, req.body.selectedDate)
    res.send(filteredHabits);
  } catch (error) {
    res.status(500);
    console.log('error in showHabits: ', error);
  }
};

const deleteHabits = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    await delHabits(req.body.selectedDate, id);
    res.send('Removed');
  } catch (error) {
    res.status(500);
    console.log('error in deleteHabits: ', error);
  }
};

const completeHabits = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    await completeHabit(id, req.body.selectedDate)
    res.send('Completed');
  } catch (error) {
    res.status(500);
    console.log('error in completeHabits: ', error);
  }
};

module.exports = { saveHabits, showHabits, deleteHabits, completeHabits };
