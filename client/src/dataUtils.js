export function combineUserData(userId) {
  const userData = USER_MAIN_DATA.find((user) => user.id === userId);
  const activityData = USER_ACTIVITY.find(
    (activity) => activity.userId === userId
  );
  const sessionData = USER_AVERAGE_SESSIONS.find(
    (session) => session.userId === userId
  );
  const performanceData = USER_PERFORMANCE.find(
    (performance) => performance.userId === userId
  );

  const combinedData = {
    id: userData.id,
    userInfos: userData.userInfos.firstName,
    todayScore: userData.todayScore,
    keyData: userData.keyData,
    activity: activityData.sessions,
    sessions: sessionData.sessions,
    performance: performanceData.data,
  };

  return combinedData;
}
