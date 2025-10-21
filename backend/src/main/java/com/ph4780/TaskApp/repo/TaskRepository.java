package com.ph4780.TaskApp.repo;

import com.ph4780.TaskApp.entity.Task;
import com.ph4780.TaskApp.entity.User;
import com.ph4780.TaskApp.enums.Priority;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findByUser(User user, Sort sort);
    List<Task> findByCompletedAndUser(Boolean completed, User user);
    List<Task> findByPriorityAndUser(Priority priority, User user, Sort sort);

}
