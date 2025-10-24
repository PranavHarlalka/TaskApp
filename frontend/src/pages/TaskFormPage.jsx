import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ApiService from '../api/ApiService';
import "../styles/TaskPages.css"


const TaskFormPage = () => {
    const { id } = useParams();
    const isEdit = Boolean(id);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        id: '',
        title: '',
        description: '',
        dueDate: '',
        priority: 'MEDIUM',
        completed: false
    });

    const [error, setError] = useState('');

    useEffect(() => {
        if (isEdit) {
            const fetchTask = async () => {
                try {
                    const response = await ApiService.getTaskById(id);
                    if (response.statusCode === 200) {
                        setFormData(response.data);
                    } else {
                        setError(response.message || 'Failed to fetch task');
                    }
                } catch (err) {
                    setError(err.response?.data?.message || 'Error fetching task');
                }
            };
            fetchTask();
        }
    }, [id, isEdit]);

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!formData.title) {
            setError('Title is required');
            return;
        }

        try {
            if (isEdit) {
                await ApiService.updateTask(formData);
            } else {
                await ApiService.createTask({ ...formData });
            }
            navigate('/tasks');
        } catch (err) {
            setError(err.response?.data?.message || 'Error saving task');
        }
    };


    const handleDelete = async (taskId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
            try {
                await ApiService.deleteTask(taskId);
                navigate('/tasks')
            } catch (err) {
                setError(err.response?.data?.message || 'Error deleting task');
            }
        }
    };


    return (
        <div className="task-form-wrapper">
            <div className="task-form-container">
                <div className="form-header">
                    <h2>
                        <span className="form-icon">{isEdit ? '✏️' : '➕'}</span>
                        {isEdit ? 'Edit Task' : 'Create New Task'}
                    </h2>
                    <p className="form-subtitle">
                        {isEdit 
                            ? 'Update the details of your task' 
                            : 'Fill in the details to create a new task'
                        }
                    </p>
                </div>

                {error && <div className="error-message">⚠️ {error}</div>}

                <form onSubmit={handleSubmit} className="task-form">
                    <div className="form-group">
                        <label htmlFor="title">
                            <span className="label-icon">📝</span>
                            Task Title*
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="e.g., Complete project documentation"
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">
                            <span className="label-icon">📄</span>
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Add more details about this task..."
                            rows="5"
                            className="form-textarea"
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="dueDate">
                                <span className="label-icon">📅</span>
                                Due Date
                            </label>
                            <input
                                type="date"
                                id="dueDate"
                                name="dueDate"
                                value={formData.dueDate}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="priority">
                                <span className="label-icon">🎯</span>
                                Priority Level
                            </label>
                            <select
                                id="priority"
                                name="priority"
                                value={formData.priority}
                                onChange={handleChange}
                                className="form-select"
                            >
                                <option value="HIGH">🔴 High Priority</option>
                                <option value="MEDIUM">🟡 Medium Priority</option>
                                <option value="LOW">🟢 Low Priority</option>
                            </select>
                        </div>
                    </div>

                    {isEdit && (
                        <div className="form-group checkbox-group">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    id="completed"
                                    name="completed"
                                    checked={formData.completed}
                                    onChange={(e) => setFormData(prev => ({
                                        ...prev,
                                        completed: e.target.checked
                                    }))}
                                    className="checkbox-input"
                                />
                                <span className="checkbox-custom"></span>
                                <span className="checkbox-text">
                                    <span className="checkbox-icon">✓</span>
                                    Mark this task as completed
                                </span>
                            </label>
                        </div>
                    )}

                    <div className="form-actions">
                        <button type="submit" className="save-button">
                            <span className="button-icon">{isEdit ? '💾' : '✨'}</span>
                            {isEdit ? 'Update Task' : 'Create Task'}
                        </button>
                        
                        <button
                            type="button"
                            className="cancel-button"
                            onClick={() => navigate('/tasks')}
                        >
                            <span className="button-icon">✕</span>
                            Cancel
                        </button>
                        
                        {isEdit && (
                            <button
                                type="button"
                                onClick={() => handleDelete(id)}
                                className="delete-button"
                            >
                                <span className="button-icon">🗑️</span>
                                Delete Task
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskFormPage;